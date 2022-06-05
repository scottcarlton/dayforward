<template>
  <component :is="$route.meta.layout || TheLayout" />
</template>

<script setup>
import TheLayout from './layouts/TheLayout.vue';
</script>

<style>
@import './assets/styles/main.css';
</style>
