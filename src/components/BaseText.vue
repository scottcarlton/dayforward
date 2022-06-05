<template>
  <component :is="as" :class="[$style.copy]"><slot /></component>
</template>

<script setup>
  const props = defineProps({
    as: {
      type: String,
      default: "p"
    }
  })
</script>

<style module>
.copy {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}
</style>
