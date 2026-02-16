import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        ink: '#0f172a',
        accent: '#4f46e5',
        soft: '#eef2ff',
      },
      boxShadow: {
        glow: '0 14px 45px rgba(79, 70, 229, 0.20)',
      },
      backgroundImage: {
        bright:
          'radial-gradient(circle at 20% 8%, rgba(99, 102, 241, 0.22), transparent 40%), radial-gradient(circle at 85% 20%, rgba(56, 189, 248, 0.2), transparent 35%), linear-gradient(to bottom, #ffffff, #f8fafc)',
      },
    },
  },
  plugins: [],
};

export default config;
