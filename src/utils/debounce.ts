export function debounce<F extends (...args: any[]) => any>(this: any, fn: F, delay = 300) {
  let timer: number

  return (...args: any[]) => {
    if (timer !== undefined)
      clearTimeout(timer)

    timer = window.setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
