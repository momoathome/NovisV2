import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // presetMini,
  // transformerDirectives,
  transformerVariantGroup
} from 'unocss'

/* @unocss-include */

export default defineConfig({
  shortcuts: [
    ['nav-item-link', 'no-underline transition py-2 px-4 text-xl text-dark-800 hover:text-primary dark:text-gray-400 dark:hover:text-white lg:( text-lg py-2.5 )'],
    ['dropDown-item', 'nav-item-link block w-30% md:w-75% lg:( w-full flex justify-center !px-0 !py-1 hover:bg-light-700/60 dark:hover:bg-gray-600 )'],
    ['icon-btn', 'cursor-pointer select-none p-0 m-0 opacity-75 transition hover:( opacity-100 text-primary ) text-dark-800 dark:text-base_light !outline-none !border-none'],
    ['counter-btn', 'px-4 py-2 font-medium text-sm tracking-wide text-white capitalize cursor-pointer transition-colors transform bg-primary rounded-md border-none hover:bg-primary_light focus:( outline-none ring ring-base dark:ring-base_light ring-opacity-80 )'],
    ['bar', 'block w-25px h-3px my-5px mx-auto transition bg-base dark:bg-base_light'],
],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      }
    }),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  preflights: [],

  rules: [
    [/^text-(.*)$/, ([, c], { theme }) => {
      // @ts-ignore
      if (theme.colors[c]) {
      // @ts-ignore prettier-ignore
        return { color: theme.colors[c] }
      }
    }],
  ],
    theme: {
    colors: {
      /* base: '#0C0F18', */
      base: 'rgb(var(--base))',
      base_light: 'rgb(var(--base-light))',
      primary: 'rgb(var(--primary))',
      primary_light: 'rgb(var(--primary-light))',
      primary_dark: 'rgb(var(--primary-dark))',
      secondary: '#222831',
      accent: '#F05454'
    },
  },

})