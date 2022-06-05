<template>
  <div :class="[$style.grid, $style[`grid-cols-${cols}`]]">
    <slot />
  </div>
</template>

<script setup>

const props = defineProps({
  cols: {
    type: String,
    default: '12'
  }
})
</script>

<style module>
.grid {
  display: grid;
}

.grid-cols-12 {
  grid-template-columns: repeat(12,minmax(0,1fr))
}
</style>