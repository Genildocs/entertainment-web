import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
      },
      fontSize: {
        body_M: '15px',
        body_S: '13px',
        heading_L: '32px',
        heading_M: '24px',
        heading_S: '24px',
        heading_XS: '18px',
      },
      colors: {
        red_1: '#FC4747',
        white_1: '#FFFFFF',
        blue_1: '#161D2F',
        concreto: '#5A698F',
        blue_black: '#10141E',
      },
    },
  },
  plugins: [],
};
export default config;
