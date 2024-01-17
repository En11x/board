<script setup lang="ts">
import Popover from '@/components/popover/index.vue'
</script>

<template>
  <Popover>
    <template #content>
      content
    </template>
    <button btn-sm>
      <i i-carbon-menu i-sm />
    </button>
  </Popover>
</template>
