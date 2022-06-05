<template>
  <TheWrapper>
    <AppHeader />
    <TheMain>
      <RouterView />
    </TheMain>
    <AppFooter />
  </TheWrapper>
</template>

<script setup>
import TheWrapper from '@/components/TheWrapper.vue';
import TheMain from '@/components/TheMain.vue';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
</script>

<style>
</style>
