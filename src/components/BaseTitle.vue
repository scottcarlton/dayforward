<template>
  <component :is="as" :class="[$style.title, $style[as], $style[size]]"><slot /></component>
</template>

<script setup>
  const props = defineProps({
    as: {
      type: String,
      default: "h1"
    },
    size: {
      type: String
    }
  })
</script>

<style module>
.h1 {
  font-size: 4rem;
  line-height: 1;
}
.h2 {
  font-size: 3.75rem;
  line-height: 1.2;
}

.h3 {
  font-size: 3.25rem;
  line-height: 1.2;
}

.h3.sm {
  font-size: 1.75rem;
}
.h4 {
  letter-spacing: .04rem;
}

.title {
  margin-top: 0;
  margin-bottom: 12px;
}


</style>
