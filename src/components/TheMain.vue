<template>
  <main :class="$style.main">
    <AppContainer>
      <slot />
    </AppContainer>
  </main>
</template>

<script setup>
import AppContainer from './AppContainer.vue';
</script>

<style module>
.main {
  padding-top: 82px;
}
</style>