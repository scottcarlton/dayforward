<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script setup></script>

<style module>
.container {
  margin-right: auto;
  margin-left: auto;
}
</style>