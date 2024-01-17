<script setup lang="ts">
import Popover from '@/components/popover/index.vue'
</script>

<template>
  <div fixed left-0 top-0 bg-panel>
    <Popover>
      <template #content>
        content
      </template>
      <button btn-sm>
        <i i-carbon-menu i-sm />
      </button>
    </Popover>
  </div>
</template>
