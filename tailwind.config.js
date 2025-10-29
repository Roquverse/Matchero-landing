/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette from index.css
        cyan: {
          20: '#cdf0f6',
          40: '#9be2ee',
          60: '#6ad3e5',
          80: '#38c5dd',
          100: '#06b6d4',
        },
        green: {
          20: '#d9f99d',
          40: '#bef264',
          60: '#a3e635',
          80: '#84cc16',
          100: '#3a6202',
        },
        'deep-tek': {
          20: '#d2d8e8',
          40: '#a5b0d0',
          60: '#7889b9',
          80: '#4b61a1',
          100: '#1e3a8a',
        },
        'tek-forward': {
          20: '#cdf0f6',
          40: '#9be2ee',
          60: '#6ad3e5',
          80: '#38c5dd',
          100: '#06b6d4',
        },
        'successful-match': {
          20: '#d9f99d',
          40: '#bef264',
          60: '#a3e635',
          80: '#84cc16',
          100: '#3A6202',
        },
        error: {
          20: '#f1f5f9',
          40: '#fda4af',
          60: '#fb7185',
          80: '#f43f5e',
          100: '#84031f',
        },
        warning: {
          20: '#fed7aa',
          40: '#fda4af',
          60: '#fb7185',
          80: '#f43f5e',
          100: '#84031f',
        },
      },
    },
  },
  plugins: [],
}
