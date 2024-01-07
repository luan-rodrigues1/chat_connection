import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary-color": "#F0F0F2",
      "secondary-color": "#E9ECF3",
      "white-color": "#FCFCFC",
      "black-color": "#333333",
      "gray-dark-color": "#585858",
      'gray-color': '#D6D4D4',
      "gray-light-color": "#D9D9D9"
    },
    fontSize: {
      "extra-huge-size": "40px",
      "extra-large-size": "24px",
      "large-size": "20px",
      "medium-size": "16px",
      "small-size": "12px",
    },
  },
  plugins: [],
}
export default config
