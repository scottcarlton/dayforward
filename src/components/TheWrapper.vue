<template>
  <div :class="$style.wrapper">
    <slot />
  </div>
</template>

<style module>
.wrapper {
  position: relative;
  min-height: 100vh;
}
</style>