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
    ['nav-item-link', 'no-underline transition transition-duration-200 py-2 px-4 text-xl text-white hover:text-primary lg:( text-lg px-8 )'],
    ['dropDown-item', 'nav-item-link block w-30% md:w-75% lg:( w-full !px-4 !py-1 hover:bg-light-700/60 )'],
    ['icon-btn', 'cursor-pointer text-white p-0 m-0 opacity-75 transition transition-duration-200 hover:( opacity-100 text-primary ) !outline-none !border-none'],
    ['bar', 'block w-25px h-3px my-5px mx-auto transition bg-primary'],
    ['counter-btn', 'px-4 py-2 font-medium text-sm tracking-wide text-white capitalize cursor-pointer transition-colors transform bg-primary rounded-md border-none hover:bg-primary_light focus:( outline-none ring ring-base dark:ring-base_light ring-opacity-80 )'],
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
      base_dark: 'rgb(var(--base-dark))',
      primary: 'rgb(var(--primary))',
      primary_light: 'rgb(var(--primary-light))',
      primary_dark: 'rgb(var(--primary-dark))',
      secondary: 'rgb(var(--secondary))',
      tertiary: 'rgb(var(--tertiary))',
      accent: 'rgb(var(--accent))'
    },
  },

})