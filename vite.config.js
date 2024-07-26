import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL)
  },
  include: [
    '@ckeditor/ckeditor5-react',
    '@ckeditor/ckeditor5-build-classic',
    '@ckeditor/ckeditor5-markdown-gfm'
  ],
  exclude: ['@ckeditor/ckeditor5-core', '@ckeditor/ckeditor5-engine', '@ckeditor/ckeditor5-utils', '@ckeditor/ckeditor5-ui', '@ckeditor/ckeditor5-theme-lark', '@ckeditor/ckeditor5-editor-classic']
})
