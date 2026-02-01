import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Minimal theme extension - only what's needed
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1f2937',
            lineHeight: '1.75',
            '> *': {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'h1, h2, h3, h4': {
              fontWeight: '700',
              lineHeight: '1.25',
              marginTop: '2em',
              marginBottom: '1em',
            },
            'h1': {
              fontSize: '2.25em',
            },
            'h2': {
              fontSize: '1.875em',
            },
            'h3': {
              fontSize: '1.5em',
            },
            'p': {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'ul, ol': {
              paddingLeft: '1.625em',
            },
            'li': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'a': {
              color: '#2563eb',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            'a:hover': {
              color: '#1d4ed8',
            },
            'img': {
              marginTop: '2em',
              marginBottom: '2em',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
export default config

