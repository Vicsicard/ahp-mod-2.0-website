import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

// Simple rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const ipRequestMap = new Map();

// Simple URL validation
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

// Add http:// prefix if missing
function normalizeUrl(url) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
}

export async function GET(request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    const now = Date.now();
    const lastRequest = ipRequestMap.get(ip);
    
    if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Update rate limit
    ipRequestMap.set(ip, now);
    
    // Clean up old entries every 10 minutes
    if (ipRequestMap.size > 100) {
      for (const [storedIp, timestamp] of ipRequestMap.entries()) {
        if (now - timestamp > 10 * 60 * 1000) {
          ipRequestMap.delete(storedIp);
        }
      }
    }
    
    // Get URL from query params
    const url = request.nextUrl.searchParams.get('url');
    
    if (!url) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }
    
    // Validate URL
    if (!isValidUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }
    
    // Normalize URL
    const normalizedUrl = normalizeUrl(url);
    
    // Fetch the webpage
    const response = await axios.get(normalizedUrl, {
      headers: {
        'User-Agent': 'AHP-Module-Visibility-Scanner/1.0',
      },
      timeout: 10000, // 10 seconds timeout
    });
    
    const html = response.data;
    
    // Parse HTML with cheerio
    const $ = cheerio.load(html);
    
    // Initialize score and issues
    let score = 50; // Start with a neutral score
    const issues = [];
    const positives = [];
    
    // Check for JSON-LD
    const jsonLd = $('script[type="application/ld+json"]');
    if (jsonLd.length === 0) {
      score -= 15;
      issues.push('No JSON-LD structure detected');
    } else {
      score += 15;
      positives.push('JSON-LD structure detected');
    }
    
    // Check for meta description
    const metaDescription = $('meta[name="description"]').attr('content');
    if (!metaDescription || metaDescription.length < 50) {
      score -= 10;
      issues.push('Missing or short meta description');
    } else {
      score += 5;
      positives.push('Good meta description');
    }
    
    // Check for title
    const title = $('title').text();
    if (!title || title.length < 10) {
      score -= 10;
      issues.push('Missing or generic title');
    } else {
      score += 5;
      positives.push('Clear page title');
    }
    
    // Check for semantic HTML structure
    const hasArticle = $('article').length > 0;
    const hasSection = $('section').length > 0;
    const hasNav = $('nav').length > 0;
    const hasHeader = $('header').length > 0;
    const hasFooter = $('footer').length > 0;
    
    const semanticScore = [hasArticle, hasSection, hasNav, hasHeader, hasFooter].filter(Boolean).length;
    
    if (semanticScore < 2) {
      score -= 10;
      issues.push('Poor semantic HTML structure');
    } else if (semanticScore >= 4) {
      score += 10;
      positives.push('Excellent semantic HTML structure');
    } else {
      score += 5;
      positives.push('Decent semantic HTML structure');
    }
    
    // Check for headings structure
    const h1Count = $('h1').length;
    const hasProperHeadings = h1Count === 1 && $('h2').length > 0;
    
    if (!hasProperHeadings) {
      score -= 5;
      issues.push('Improper heading structure');
    } else {
      score += 5;
      positives.push('Good heading structure');
    }
    
    // Check for AHP Module script
    const hasAhpModule = html.includes('ahpmodule.js') || 
                         html.includes('ahp-module') || 
                         html.includes('ai-handshake');
    
    if (!hasAhpModule) {
      score -= 20;
      issues.push('AHP Module not detected');
    } else {
      score += 20;
      positives.push('AHP Module detected');
    }
    
    // Check for author information
    const hasAuthor = $('[itemprop="author"]').length > 0 || 
                     $('meta[name="author"]').length > 0 || 
                     html.includes('"author"');
    
    if (!hasAuthor) {
      score -= 10;
      issues.push('No clear author information');
    } else {
      score += 10;
      positives.push('Author information present');
    }
    
    // Check page load speed (estimated)
    const contentSize = html.length;
    const imageCount = $('img').length;
    const scriptCount = $('script').length;
    
    let speedScore = 0;
    if (contentSize < 100000 && imageCount < 10 && scriptCount < 15) {
      speedScore = 10;
      positives.push('Page loads fast (good!)');
    } else if (contentSize > 500000 || imageCount > 30 || scriptCount > 30) {
      speedScore = -10;
      issues.push('Page may load slowly');
    }
    
    score += speedScore;
    
    // Ensure score is between 0 and 100
    score = Math.max(0, Math.min(100, Math.round(score)));
    
    // Generate assessment text
    let assessment = '';
    if (score < 30) {
      assessment = 'AI bots are likely missing most of your content. Urgent improvements needed.';
    } else if (score < 50) {
      assessment = 'AI bots are likely skipping or misreading key parts of your site.';
    } else if (score < 70) {
      assessment = 'AI bots can see your site, but may not fully understand its context and value.';
    } else if (score < 90) {
      assessment = 'Your site has good AI visibility, with some room for improvement.';
    } else {
      assessment = 'Excellent AI visibility! Your site is well-optimized for AI comprehension.';
    }
    
    // Limit the number of issues and positives to show
    const topIssues = issues.slice(0, 3);
    const topPositives = positives.slice(0, 2);
    
    return NextResponse.json({
      url: normalizedUrl,
      score,
      assessment,
      issues: topIssues,
      positives: topPositives,
      scannedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error scanning URL:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to scan URL',
        message: error.message 
      },
      { status: 500 }
    );
  }
}
