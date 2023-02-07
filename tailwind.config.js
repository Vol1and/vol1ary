module.exports = {
  content: [
    './renderer/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        md: '16px',
        lg: '60px'
      }
    },
    screens: {
      /**
       * Доступные брейкпоинты
       */
      md: '768px',
      lg: '1440px',

      mobile: { max: '767px' }, // mobile only
      'md-only': { min: '768px', max: '1439px' }, // tablet only
      'lg-only': { min: '1440px' }, // desktop only

      device: { max: '1439px' } // mobile and tablet
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fff',
      black: '#505050',
      green: '#09AD67',
      red: '#D34440',
      grey: 'rgba(80, 80, 80, 0.5)',
      additional: {
        1: '#89DA5D',
        2: '#2B7B73',
        3: '#0075AD',
        4: '#99C8DE'
      },
      auxiliary: {
        1: '#A3D6C0',
        2: '#D0E9DD',
        3: '#E7E89D',
        4: '#F3F4CE',
        5: '#99ACB5',
        6: '#CCD6DA',
        7: '#B599FD',
        8: '#DACCFE',
        9: '#F3D1B9',
        10: '#F9E8DC'
      }
    },
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      36: '36px',
      38: '38px',
      40: '40px',
      42: '42px',
      44: '44px',
      46: '46px',
      48: '48px',
      50: '50px',
      52: '52px',
      54: '54px',
      56: '56px',
      58: '58px',
      60: '60px',
      64: '64px',
      68: '68px',
      72: '72px',
      76: '76px',
      80: '80px',
      84: '84px',
      88: '88px',
      92: '92px',
      96: '96px',
      100: '100px',
      120: '120px',
      150: '150px',
      160: '160px',
      240: '240px'
    },
    borderRadius: {
      none: '0px',
      DEFAULT: '10px',
      full: '9999px'
    },
    fontFamily: {
      title: ['Raleway', 'Arial', 'sans-serif'],
      text: ['Open Sans', 'Arial', 'sans-serif']
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    fontSize: {
      10: '10px',
      12: '12px',
      14: '14px',
      15: '15px',
      base: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      26: '26px',
      30: '30px',
      40: '40px',
      50: '50px',
      60: '60px',
      80: '80px',
      100: '100px'
    },
    letterSpacing: {
      0: '0',
      1: '.01em',
      2: '.02em',
      3: '.03em',
      5: '.05em'
    },
    lineHeight: {
      120: '120%',
      130: '130%',
      140: '140%',
      150: '150%'
    },

    // Расширяем дефолтную тему
    extend: {
      transitionProperty: {
        background: 'background-color',
        borders: 'border-color'
      }
    }
  },
  plugins: [require('./typography.config'), require('@tailwindcss/forms')]
}
