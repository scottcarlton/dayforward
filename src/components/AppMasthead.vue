<template>
  <section :class="$style.masthead">
    <slot />
  </section>
</template>

<script setup></script>

<style module>
.masthead {
  width: 100%;
  height: calc(100vh - 68px);
  min-height: 620px;
}
</style>