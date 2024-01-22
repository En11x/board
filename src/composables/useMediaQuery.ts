import { ref, watchEffect } from 'vue'

export function useMediaQuery(query: string) {
  const matches = ref(false)

  const update = () => {
    const mediaQuery = window.matchMedia(query)
    matches.value = !!mediaQuery.matches

    if (!mediaQuery)
      return

    if ('addEventListener' in mediaQuery)
      mediaQuery.addEventListener('change', update)
    else
      (mediaQuery as any).addListener(update)
  }

  watchEffect(update)

  return matches
}
