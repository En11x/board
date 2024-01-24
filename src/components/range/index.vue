<script setup lang="ts">
import { onMounted, ref,watch } from 'vue'
import { useEventListener } from '@/composables'
import { debounce } from '@/utils/index'

const props = defineProps<{
  range: number
}>()

const emit = defineEmits<{ (e: 'updated', value: number): void }>()

const rangeEl = ref<HTMLElement>()
const sliderEl = ref<HTMLElement>()
const leftEl = ref<HTMLElement>()
const rightEl = ref<HTMLElement>()
const range = ref<number>(props.range)
const rangeElWidth = ref<number>(0)
const rangeElLeft = ref<number>(0)
const positionX = ref<number>(0)
const isMouseDown = ref<boolean>(false)

const slideClick = (e: MouseEvent) => {
  positionX.value = e.x - rangeElLeft.value
}
const updated = debounce(() => emit('updated', range.value))

useEventListener(sliderEl, 'mousedown', () => {
  isMouseDown.value = true
})
useEventListener(document, 'mouseup', () => {
  isMouseDown.value = false
})
useEventListener(leftEl, 'click', slideClick)
useEventListener(rightEl, 'click', slideClick)
useEventListener(document, 'mousemove', (e: MouseEvent) => {
  if (!isMouseDown.value) return
  let diff = e.x - rangeElLeft.value
  if (diff < 0) diff = 0
  if (diff > rangeElWidth.value) diff = rangeElWidth.value
  positionX.value = diff
})

onMounted(() => {
  rangeElWidth.value = rangeEl.value!.clientWidth
  rangeElLeft.value = rangeEl.value!.getBoundingClientRect().left
  positionX.value = (range.value / 100) * rangeElWidth.value
})

watch(positionX, (newPositionX) => {
  range.value = Math.floor((newPositionX / rangeElWidth.value) * 100)
  updated()
})
</script>

<template>
  <div ref="rangeEl" relative w-full f-c-c>
    <span
      ref="leftEl"
      :style="{ width: `${range}%` }"
      h-1
      b-rd
      bg-active
      cursor-pointer
    />
    <span
      ref="sliderEl"
      absolute
      circle
      cursor-pointer
      border-2
      b-current
      bg-2
      :style="{ left: `${positionX - 2}px` }"
    />
    <span
      ref="rightEl"
      h-1
      b-rd
      bg-2
      dark:bg-hover-dark
      cursor-pointer
      :style="{ width: `${100 - range}%` }"
    />
  </div>
</template>
