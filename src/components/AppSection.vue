<template>
  <section :class="$style.section">
    <AppContainer>
      <slot />
    </AppContainer>
  </section>
</template>

<script setup>
import AppContainer from './AppContainer.vue';
</script>

<style module>
.section {
  width: 100%;
  min-height: 620px;
}
</style>