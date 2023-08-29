/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        '8' : '8px',
        '10': '10px',
        '60': '60px',
        '100' : '100px',
      },
      boxShadow: {
        'modalShadow': '1px 0px 0px 0px #DEDFE3',
        'shadow-1' : '0px 8px 20px 0px rgba(78, 96, 255, 0.16)',
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'modalShadow': 'rgba(62, 62, 62, 0.11)',
        'primary-blue': '#697BFF',
        'black': {
          dim: '#545563',
          light: '#9097A5',
          medium: '',
          dark: '#2B2B43'
        },
        'grey' : {
          dim : '#C7C8D2',
          light: '#83859C',
        },
      },
      height: {
        '60': '3.75rem'
      },
      fontSize: {
        '10': ['10px', {
          lineHeight: '15px',
        }],
        '12': ['12px', {
          lineHeight: '16px',
        }],
        '13': ['13px', {
          lineHeight: '20px',
        }],
        '14': ['14px', {
          lineHeight: '20px',
        }],
        '16': ['16px', {
          lineHeight: '24px',
        }],
        '18': ['18px', {
          lineHeight: '27px',
        }],
        '20': ['20px', {
          lineHeight: '27px',
        }],
        '22': ['22px', {
          lineHeight: '27px',
        }],
        '22.1': ['22px', {
          lineHeight: '33px',
        }],
        '24': ['24px', {
          lineHeight: '27px',
        }],
        '30': ['30px', {
          lineHeight: '45px',
        }],
        '60': ['60px',
          {
            lineHeight: '80px',
        }],
      }
    },
  },
  plugins: [],
}

