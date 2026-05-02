// @ts-check
import {defineConfig, fontProviders} from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import alpinejs from '@astrojs/alpinejs'

import icon from 'astro-icon'


import cloudflare from '@astrojs/cloudflare';


export default defineConfig({
  output: 'server',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Lato',
      cssVariable: '--font-display',
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
    },
  ],

  integrations: [
    alpinejs({
      entrypoint: '/src/utilities/alpine/index',
    }),
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
          'plus',
        ],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
})