import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#27F306',
        secondary: '#1F6115',
        circular: '#BACDB7'
      },
      fontFamily: {
        lexend: ["Lexend"],
        body: ['Lexend'],
        abhaya:['Abhaya Libre']
      },
    },
  },
  plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('tailwind-scrollbar-hide'),
    ],
}
export default config