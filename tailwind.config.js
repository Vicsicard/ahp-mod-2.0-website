/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Futuristic Minimalistic Color Palette
        'charcoal': '#0C1020',    // Deep space charcoal - Primary backgrounds
        'graphite': '#1B1F2A',    // Graphite - Secondary backgrounds, cards
        'teal': '#45A29E',        // Teal - Primary accent color, CTAs, links
        'violet': '#c084fc',      // Violet - Secondary accent color, highlights
        'soft-white': '#E0E0E0',  // Soft white - Primary text color
        
        // Legacy colors for backward compatibility
        'primary': '#45A29E',     // Mapped to teal
        'secondary': '#c084fc',   // Mapped to violet
        'dark': '#0C1020',        // Mapped to charcoal
        'light': '#E0E0E0',       // Mapped to soft-white
      },
      fontFamily: {
        'sans': ['Inter', 'Space Grotesk', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'serif': ['DM Serif Display', 'Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px', // Custom max-width as specified
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-in-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scaleIn': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%': { opacity: '0.6' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '0.6' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(69, 162, 158, 0.5), 0 0 10px rgba(69, 162, 158, 0.2)' },
          '100%': { boxShadow: '0 0 10px rgba(69, 162, 158, 0.8), 0 0 20px rgba(69, 162, 158, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
