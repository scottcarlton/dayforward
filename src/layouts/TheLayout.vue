<template>
  <TheWrapper>
    <TheHeader />
    <TheMain>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <div>
            <component :is="Component" />
          </div> 
        </Transition>
      </RouterView>
    </TheMain>
    <TheFooter />
  </TheWrapper>
</template>

<script setup>
import TheWrapper from '@/components/TheWrapper.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheMain from '@/components/TheMain.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
