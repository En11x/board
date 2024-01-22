import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'wh-full': 'w-full h-full',
    'f-j-b': 'flex items-center justify-between',
    'f-c-c': 'flex items-center justify-center',
    'panel': 'bg-2 border-rd-[9px] ',
    'popover':
      'f-c-c absolute ma-[0px] panel shadow-1 dark:shadow-1-dark font-mono overflow-inherit',
    'i-sm': 'w-[16px] h-[16px] inline-block',
    'btn-sm':
      'relative f-c-c ma-[4px] pa-[4px] h-[32px] min-w-[32px] border-rd-[6px] bg-transparent cursor-pointer font-size-[12px] color-text dark:color-text-dark hover:bg-hover dark:hover:bg-hover-dark',
    'btn-md': 'btn-sm w-[7rem]',
    'btn-lg': 'btn-sm w-[10rem]',
    'switch-animation': 'transition duration-300',
    'bg-1': 'bg-base dark:bg-base-dark switch-animation',
    'bg-2': 'bg-panel dark:bg-panel-dark',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.3,
      warn: true,
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    colors: {
      text: '#2d2d2d',
      textDark: '#ffffff',
      hover: 'rgba(0, 0, 0, .042)',
      hoverDark: 'hsl(220, 8%, 20%)',
      base: 'rgb(249, 250, 251)',
      baseDark: 'hsl(240, 5%, 8%)',
      panel: 'hsl(204, 16%, 94%)',
      panelDark: 'hsl(220, 8%, 15%)',
    },
  },
  rules: [
    [
      'shadow-1',
      {
        'box-shadow':
          '0px 1px 2px rgba(0, 0, 0, .28), 0px 2px 6px rgba(0, 0, 0, .14), inset 0px 0px 0px 1px #ffffff',
      },
    ],
    [
      'shadow-1-dark',
      {
        'box-shadow':
          '0px 1px 2px rgba(0, 0, 0, .28), 0px 2px 6px rgba(0, 0, 0, .14), inset 0px 0px 0px 1px hsl(240, 13%, 22%)',
      },
    ],
  ],
})
