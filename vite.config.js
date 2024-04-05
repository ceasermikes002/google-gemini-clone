import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();

// Get environment variables from process.env or .env file
const { REACT_APP_GEMINI_API_KEY } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true, // Prevents replacing assignments
      values: {
        'process.env.REACT_APP_GEMINI_API_KEY': JSON.stringify(REACT_APP_GEMINI_API_KEY),
      },
    }),
  ],
});
