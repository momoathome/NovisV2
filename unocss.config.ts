import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // presetMini,
  // transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

/* @unocss-include */

export default defineConfig({
  shortcuts: [
    ['nav-item-link', 'no-underline transition transition-duration-200 py-2 px-4 w-max text-sm font-sans font-bold uppercase text-white hover:text-primary lg:( px-8 )'],
    ['dropDown-item', 'nav-item-link block w-full lg:(!px-6 !py-2 hover:bg-primary_light/50 )'],
    ['icon-btn', 'cursor-pointer text-primary_light p-0 m-0 opacity-80 transition transition-duration-200 hover:( opacity-100 text-primary ) !border-none'],
    ['bar', 'block w-25px h-3px my-5px mx-auto transition bg-primary'],
    ['newsSliderNavigation', 'cursor-pointer z-2 absolute top-50% translate-y--50% rounded-full w-40px h-40px p-2 hover:( bg-light-50/10 )'],
    ['counter-btn', 'px-4 py-2 font-medium text-sm tracking-wide text-white capitalize cursor-pointer transition-colors transform bg-primary rounded-md border-none hover:bg-primary_light focus:( outline-none ring ring-base dark:ring-base_light ring-opacity-80 )'],
    ['template-DropDown-Item', 'no-underline cursor-pointer block bg-white transition transition-duration-200 w-max text-sm text-dark-800 font-serif font-bold py-1 px-4 w-full text-left lg:hover:bg-dark-50/15 '],

    // insanity
    ['insanity-nav-item-link', 'relative no-underline transition transition-duration-200 py-2 px-4 w-max text-xs uppercase text-base hover:( text-primary bg-base_dark ) lg:( py-4.75 px-8 )'],
    ['insanity-dropDown-item', 'insanity-nav-item-link block w-full lg:(!px-8 !py-2 hover:bg-base_dark )'],
    ['insanity-newsSliderNavigation', 'cursor-pointer z-2 absolute top-50% translate-y--50% rounded-full w-60px h-60px p-1 hover:( bg-base_dark/5 )'],

  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      provider: 'none', // default provider
      fonts: {
        sans: [
          {
            name: 'Roboto',
            italic: false,
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  preflights: [],

  rules: [
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c])
          return { color: theme.colors[c] }
      },
    ],
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
      accent: 'rgb(var(--accent))',
    },
  },

})
