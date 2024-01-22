import { computed } from 'vue'
import { useMediaQuery } from '.'

export function useDark() {
  const system = useMediaQuery('(prefers-color-scheme: dark)')

  const isDark = computed<boolean>({
    get() {
      return system.value
    },
    set(v: boolean) {
      system.value = v
      document.documentElement.setAttribute('class', v ? 'dark' : 'light')
    },
  })

  return isDark
}
