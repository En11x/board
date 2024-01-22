import { computed } from 'vue'
import { useMediaQuery } from '.'

export function useDark() {
  const system = useMediaQuery('(prefers-color-scheme: dark)')

  const isDark = computed<boolean>({
    get() {
      return system.value
    },
    set(v) {
      system.value = v
    },
  })

  return isDark
}
