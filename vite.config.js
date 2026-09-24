import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? "/my-cv" : "/my-cv"
})