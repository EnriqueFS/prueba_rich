import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  base: '/prueba_rich/',
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
      },
    }),
    viteReact(),
  ],
})