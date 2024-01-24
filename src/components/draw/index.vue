<script setup lang="ts">
import { ref } from 'vue'
import Color from './Color.vue'
import Range from '@/components/range/index.vue'
import { useDrawStore } from '@/store/modules/draw'

const draw = useDrawStore()
const range = ref<number>(draw.drawWidth)
function updateRange(v: number) {
  draw.setWidth((v || 0) / 2)
}
</script>

<template>
  <div fixed right-5 top-5 rounded-3 bg-white bg-2>
    <Color />
    <div w-full p-1 pl pr>
      <Range :range="range" @updated="updateRange" />
    </div>
  </div>
</template>
