/**
 * Utility functions for the AI Visibility Score scanner
 */

/**
 * Scans a URL for AI visibility metrics
 * @param {string} url - The URL to scan
 * @returns {Promise<Object>} - The scan results
 */
export async function scanUrl(url) {
  try {
    // Validate URL format
    if (!url) {
      throw new Error('URL is required');
    }
    
    // Add protocol if missing
    let normalizedUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      normalizedUrl = `https://${url}`;
    }
    
    // Call the API endpoint
    const response = await fetch(`/api/scan?url=${encodeURIComponent(normalizedUrl)}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to scan URL');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in scanUrl:', error);
    throw error;
  }
}

/**
 * Get a sample scan result for demonstration purposes
 * @returns {Object} - Sample scan result
 */
export function getSampleScanResult() {
  return {
    url: 'https://example.com',
    score: 47,
    assessment: 'AI bots are likely skipping or misreading key parts of your site.',
    issues: [
      'No JSON-LD structure detected',
      'No clear author information',
      'AHP Module not detected'
    ],
    positives: [
      'Page loads fast (good!)',
      'Decent semantic HTML structure'
    ],
    scannedAt: new Date().toISOString(),
    isSample: true
  };
}

/**
 * Generates a score color based on the score value
 * @param {number} score - The visibility score (0-100)
 * @returns {string} - CSS color value
 */
export function getScoreColor(score) {
  if (score >= 80) return 'text-green-500';
  if (score >= 60) return 'text-blue-500';
  if (score >= 40) return 'text-yellow-500';
  if (score >= 20) return 'text-orange-500';
  return 'text-red-500';
}

/**
 * Formats a URL for display
 * @param {string} url - The URL to format
 * @returns {string} - Formatted URL
 */
export function formatUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname + (urlObj.pathname !== '/' ? urlObj.pathname : '');
  } catch (e) {
    return url;
  }
}
