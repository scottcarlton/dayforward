<template>
  <TheWrapper>
    <AppHeader />
    <TheMain>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <div>
            <component :is="Component" />
          </div> 
        </Transition>
      </RouterView>
    </TheMain>
  </TheWrapper>
</template>

<script setup>
import TheWrapper from '@/components/TheWrapper.vue';
import TheMain from '@/components/TheMain.vue';
import AppHeader from '../components/AppHeader.vue';
</script>

<style>
</style>