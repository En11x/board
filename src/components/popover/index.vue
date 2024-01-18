<script setup lang="ts">
import { ref } from 'vue'
import { useClickAway, useEventListener, usePopover } from '@/composables/index'
import type { PopoverProps } from '@/composables/usePopover'

interface IPopover extends PopoverProps {
  trigger?: 'click' | 'hover'
}
const props = withDefaults(defineProps<IPopover>(), {
  trigger: 'click',
  placement: 'bottom-start',
})
const containerEl = ref()
const popoverEl = ref()
const triggerEl = ref()

const { isOpen, open, close } = usePopover({
  popover: popoverEl,
  trigger: triggerEl,
  placement: props.placement,
  offset: props.offset,
})

function togglePopover() {
  isOpen.value ? close() : open()
}

useClickAway(containerEl, close)
if (props.trigger === 'click') {
  useEventListener(triggerEl, 'click', togglePopover)
}
else {
  useEventListener(containerEl, 'mouseover', (e: MouseEvent) => {
    if (e.composedPath().includes(triggerEl.value) || e.composedPath().includes(popoverEl.value))
      open()

    else
      close()
  })
}
</script>

<template>
  <div ref="containerEl" inline-block>
    <div ref="triggerEl">
      <slot />
    </div>
    <div v-if="isOpen" ref="popoverEl" popover>
      <slot name="content" />
    </div>
  </div>
</template>
