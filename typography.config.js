const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    /* Style Title */
    '.ttl': {
      color: theme('colors.black'),
      fontFamily: theme('fontFamily.title'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.130'),
      letterSpacing: theme('letterSpacing.2'),
      fontSize: theme('fontSize.30'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.60')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.80'),
        lineHeight: theme('lineHeight.120')
      }
    },
    '.t-article': {
      color: theme('colors.black'),
      fontFamily: theme('fontFamily.title'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.130'),
      letterSpacing: theme('letterSpacing.2'),
      fontSize: theme('fontSize.20'),
      '@media (min-width: 768px)': {
        lineHeight: theme('lineHeight.120'),
        letterSpacing: theme('letterSpacing.0')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.50')
      }
    },
    '.t-h1': {
      color: theme('colors.black'),
      fontFamily: theme('fontFamily.title'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.130'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.24'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.40')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.60')
      }
    },
    '.t-h2': {
      color: theme('colors.black'),
      fontFamily: theme('fontFamily.title'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.130'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.20'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.30')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.40')
      }
    },
    '.t-h3': {
      color: theme('colors.black'),
      fontFamily: theme('fontFamily.title'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.130'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.18'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.20')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.30')
      }
    },
    '.t-h4': {
      color: theme('colors.black'),
      fontFamily: theme('fontFamily.title'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.130'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.15'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.18')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.24')
      }
    },
    '.t-h4-capital': {
      color: theme('colors.black'),
      fontFamily: theme('fontFamily.title'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.130'),
      letterSpacing: theme('letterSpacing.2'),
      fontSize: theme('fontSize.15'),
      textTransform: 'uppercase',
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.18')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.24')
      }
    },

    /* Style Paragraph */
    '.t-p1': {
      fontFamily: theme('fontFamily.text'),
      fontWeight: theme('fontWeight.regular'),
      lineHeight: theme('lineHeight.140'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.base'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.20')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.26'),
        lineHeight: theme('lineHeight.150')
      }
    },
    '.t-p2': {
      fontFamily: theme('fontFamily.text'),
      fontWeight: theme('fontWeight.regular'),
      lineHeight: theme('lineHeight.140'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.14'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.base')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.20')
      }
    },
    '.t-p3': {
      fontFamily: theme('fontFamily.text'),
      fontWeight: theme('fontWeight.regular'),
      lineHeight: theme('lineHeight.130'),
      letterSpacing: theme('letterSpacing.1'),
      fontSize: theme('fontSize.12'),
      '@media (min-width: 768px)': {
        lineHeight: theme('lineHeight.140')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.base'),
        letterSpacing: theme('letterSpacing.0')
      }
    },

    /* Style System */
    '.t-pagination': {
      fontFamily: theme('fontFamily.text'),
      fontWeight: theme('fontWeight.regular'),
      lineHeight: theme('lineHeight.140'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.14'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.20')
      },
      '@media (min-width: 1440px)': {
        fontWeight: theme('fontWeight.medium'),
        lineHeight: theme('lineHeight.120'),
        fontSize: theme('fontSize.30')
      }
    },
    '.t-button': {
      fontFamily: theme('fontFamily.text'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.120'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.14'),
      '@media (min-width: 768px)': {
        lineHeight: theme('lineHeight.140'),
        fontSize: theme('fontSize.base')
      },
      '@media (min-width: 1440px)': {
        lineHeight: theme('lineHeight.120'),
        fontSize: theme('fontSize.20')
      }
    },
    '.t-tag': {
      fontFamily: theme('fontFamily.text'),
      fontWeight: theme('fontWeight.regular'),
      lineHeight: theme('lineHeight.140'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.10'),
      '@media (min-width: 768px)': {
        letterSpacing: theme('letterSpacing.1'),
        fontSize: theme('fontSize.12')
      },
      '@media (min-width: 1440px)': {
        letterSpacing: theme('letterSpacing.0'),
        fontSize: theme('fontSize.base')
      }
    },
    '.t-caption': {
      fontFamily: theme('fontFamily.text'),
      fontWeight: theme('fontWeight.regular'),
      lineHeight: theme('lineHeight.130'),
      letterSpacing: theme('letterSpacing.1'),
      fontSize: theme('fontSize.10'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.12')
      }
    },
    '.t-breadcrumb': {
      fontFamily: theme('fontFamily.text'),
      fontWeight: theme('fontWeight.regular'),
      lineHeight: theme('lineHeight.120'),
      letterSpacing: theme('letterSpacing.0'),
      fontSize: theme('fontSize.12')
    },
    '.t-date': {
      fontFamily: theme('fontFamily.text'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.120'),
      letterSpacing: theme('letterSpacing.3'),
      textTransform: 'uppercase',
      fontSize: theme('fontSize.12'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.14')
      },
      '@media (min-width: 1440px)': {
        fontSize: theme('fontSize.base')
      }
    }
  })
})
