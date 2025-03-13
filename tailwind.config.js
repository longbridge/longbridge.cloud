const { themeReplacements } = require('./tailwind-theme-replacements')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,scss,css,ts,tsx,jsx}',
    './components/**/*.{js,scss,css,ts,tsx,jsx}',
    './features/**/*.{js,scss,css,ts,tsx,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': '1200px',
      },
      colors: {
        ...themeReplacements(),
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addVariant }) {
      addVariant('en', '.en &')

      // 添加安全区域工具类
      addUtilities({
        '.safe-area': {
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.safe-area-pt': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-area-pb': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-area-pl': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-area-pr': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.safe-area-mt': {
          marginTop: 'env(safe-area-inset-top)',
        },
        '.safe-area-mb': {
          marginBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-area-ml': {
          marginLeft: 'env(safe-area-inset-left)',
        },
        '.safe-area-mr': {
          marginRight: 'env(safe-area-inset-right)',
        },
        '.min-h-screen-safe': {
          minHeight: 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
        },
        '.h-screen-safe': {
          height: 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
        },
      })
    }),
  ],
}
