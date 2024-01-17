<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

type IPlacement = 'bottom-start' | 'top-start' | 'left-start' | 'right-start'

interface IPopover {
  trigger?: 'click' | 'hover'
  placement?: IPlacement
}
const props = withDefaults(defineProps<IPopover>(), {
  trigger: 'click',
  placement: 'bottom-start',
})
const popoverEl = ref<HTMLElement>()
const contentEl = ref<HTMLElement>()
const triggerEl = ref<HTMLElement>()
const show = ref<boolean>(false)

function positionContent() {
  document.body.appendChild(contentEl.value!)
  const { width, height, top, left } = triggerEl.value?.getBoundingClientRect() as DOMRect
  const position: Record<IPlacement, { top: number, left: number }> = {
    'bottom-start': {
      top: top + height + window.scrollY,
      left: left + window.scrollX,
    },
    'top-start': {
      top: top - height - window.scrollY,
      left: left + window.scrollX,
    },
    'left-start': {
      top: top + window.scrollY,
      left: left - width - window.scrollX,
    },
    'right-start': {
      top: top + window.scrollY,
      left: left + width + window.scrollX,
    },
  }
  contentEl.value!.style.top = `${position[props.placement].top + 8}px`
  contentEl.value!.style.left = `${position[props.placement].left}px`
}

function clickDocument(e: MouseEvent) {
  if (contentEl.value && contentEl.value.contains(e.target as any))
    return

  close()
}

async function open() {
  show.value = true
  await nextTick()
  positionContent()
  setTimeout(() => {
    document.addEventListener('click', clickDocument)
  }, 10)
}

async function close() {
  show.value = false
  setTimeout(() => {
    document.removeEventListener('click', clickDocument)
  }, 10)
}

function onClick(e: MouseEvent) {
  if (triggerEl.value?.contains(e.target as any)) {
    if (show.value === false)
      open()

    else
      close()
  }
}

onMounted(() => {
  if (props.trigger === 'click') {
    popoverEl.value?.addEventListener('click', onClick)
  }
  else {
    popoverEl.value?.addEventListener('mouseenter', onClick)
    popoverEl.value?.addEventListener('mouseleave', onClick)
  }
})

onUnmounted(() => {
  if (props.trigger === 'click') {
    popoverEl.value?.removeEventListener('click', onClick)
  }
  else {
    popoverEl.value?.removeEventListener('mouseenter', onClick)
    popoverEl.value?.removeEventListener('mouseleave', onClick)
  }
})
</script>

<template>
  <div ref="popoverEl">
    <div v-if="show" ref="contentEl" popover>
      <slot name="content" />
    </div>
    <span ref="triggerEl">
      <slot />
    </span>
  </div>
</template>
