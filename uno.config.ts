import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    'flex-c': 'flex items-center justify-center',
    'btn-base':'relative flex-c h-[40px] min-w-[40px] bg-transparent cursor-pointer font-size-[12px] color-text',
    'switch-animation': 'transition duration-300',
    'bg-base': 'bg-base dark:bg-base-dark switch-animation',
    'bg-container': 'bg-container',
  },
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  theme: {
    colors: {
      text:'#2d2d2d',
      base: 'rgb(249, 250, 251)',
      baseDark: '#212529',
      container: 'hsl(204, 16%, 94%)',
    },
  },
})
