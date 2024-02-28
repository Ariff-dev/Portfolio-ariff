import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-bg': '##0F0F0F',
        'color-bg-secundary': '#1f1f1f',
        'color-text-sub': '#9f9f9f',
        'color-title-sub': '##BCBCBC',
        'primary-title-page': '#FF5733',
      },
    },
  },
  plugins: [],
}
export default config
