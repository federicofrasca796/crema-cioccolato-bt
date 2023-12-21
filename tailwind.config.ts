import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito-sans)', 'system-ui'],
        serif: ['var(--font-rhoza-one)', 'ui-serif'],
        display: ['var(--font-dancing-script)']
      },
      colors: {
        babyPowder: '#F7F7F2',
        primary: {
          base: '#FF5A5F',
          0: '#FFE6E6',
          100: '#FDB9BC',
          200: '#F88F92',
          300: '#F26A6E',
          400: '#E84C51',
          500: '#DB363B',
          600: '#C9252B',
          700: '#B31A1F',
          800: '#9A1216',
          900: '#800D11',
        },
        secondary: {
          base: '#58340E',
          0: '#FFF3E6',
          100: '#FCDBB9',
          200: '#F6C38D',
          300: '#ECAC67',
          400: '#DF9649',
          500: '#CC8232',
          600: '#B46D21',
          700: '#955715',
          800: '#72410D',
          900: '#4D2B08',
        },
        smokyBrown: {
          base: '#160D03',
          0: '#E6E3E1',
          100: '#E2D9D0',
          200: '#DBCDBD',
          300: '#D0BEAA',
          400: '#C1AD96',
          500: '#AB9881',
          600: '#907D69',
          700: '#6D5E4E',
          800: '#443B30',
          900: '#1A1612',
        },
        antiqueWhite: {
          base: '#FEEFDD',
          0: '#FAF3EB',
          100: '#F1E6DA',
          200: '#EEDECB',
          300: '#E9D5BC',
          400: '#E2CBAF',
          500: '#D9C0A2',
          600: '#CDB495',
          700: '#BDA587',
          800: '#AC9579',
          900: '#99846B',
        },
      }
    },
  },
  plugins: [],
}

export default config