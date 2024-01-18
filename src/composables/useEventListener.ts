import type { MaybeRef } from 'vue'
import { isRef, onBeforeUnmount, onMounted, unref, watch } from 'vue'

export function useEventListener(
  ...args: [MaybeRef<EventTarget>, string, any]
) {
  const [target, event, handler] = args

  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue && oldValue.removeEventListener(event, handler)
      value.addEventListener(event, handler)
    })
  }
  else {
    onMounted(() => {
      unref(target).addEventListener(event, handler)
    })
  }

  onBeforeUnmount(() => {
    unref(target).removeEventListener(event, handler)
  })
}
