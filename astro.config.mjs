import {defineConfig, fontProviders} from 'astro/config'

import alpinejs from '@astrojs/alpinejs'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Gelasio',
      cssVariable: '--font-display',
    },
    {
      provider: fontProviders.google(),
      name: 'Poppins',
      cssVariable: '--font-body',
    },
  ],
  integrations: [
    alpinejs({entrypoint: './src/utilities/alpine/index.ts'}),
    icon({
      include: {
        mdi: [
          'chevron-down',
          'chevron-right',
          'menu',
          'moon-waning-crescent',
          'white-balance-sunny',
          'window-close',
          'facebook',
          'instagram',
          'linkedin',
          'youtube',
          'star',
          'dribbble',
          'twitter',
          'email',
          'phone',
          'map-marker',
          'chevron-down',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})

// provider: fontProviders.adobe({ id: 'your-id' })
// provider: fontProviders.bunny()
// provider: fontProviders.fontshare()
// provider: fontProviders.google()
