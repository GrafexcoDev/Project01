// Design tokens customized to match GrafexcoDev one‑page design
export const tokens = {
  fonts: {
    display: 'Inter, Inter var, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    body: 'Inter, Inter var, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  },
  fontSizes: {
    h1: '72px', // Hero
    h2: '44px', // Section titles
    h3: '28px', // Card titles
    bodyLg: '18px',
    body: '16px',
    small: '14px'
  },
  lineHeights: { h1: '1.08', h2: '1.15', h3: '1.25', body: '1.7' },
  radii: { sm: '10px', md: '14px', lg: '18px', xl: '26px' },
  spacing: { xs: '8px', sm: '12px', md: '16px', lg: '24px', xl: '32px', xxl: '56px' },
  colors: {
    // Primary brand blue (CTA/links)
    brand: {
      50: '240 246 255',
      100: '223 236 255',
      200: '189 215 255',
      300: '144 187 255',
      400: '95 156 255',
      500: '31 107 255',
      600: '21 88 218',
      700: '17 72 179',
      800: '13 53 131',
      900: '10 40 98'
    },
    accent: { sky: '80 164 255', green: '39 201 112', purple: '124 93 250', yellow: '255 193 58' },
    text: '16 24 40',
    mutedText: '100 112 125',
    bg: '247 250 255',
    elevated: '255 255 255',
    border: '226 232 240',
    dark: { text: '229 231 235', mutedText: '156 163 175', bg: '17 24 39', elevated: '23 31 49', border: '45 55 72' }
  },
};
