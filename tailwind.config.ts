import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "base-color": "#009ADF",
      "white-color": "#ffffff",
      "black-color": "#000000",
      "gray-0": "#FAFAFA",
      "gray-1": "#ECECEC",
      "gray-2": "#D9D9D9",
      "gray-3": "#868E96",
      "gray-4": "#808080",
      "alert-error": "#ff0000"
    }
  },
  plugins: [],
}
export default config
