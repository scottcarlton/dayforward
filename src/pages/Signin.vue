<template>
  <div>
    <AppContainer :class="$style.modify">
      <div :class="$style.wrapper">
        <BaseTitle>Welcome back.</BaseTitle>
        <BaseText>If you’ve previously started an application or already have a policy with us, enter your email to pick up where you left off.</BaseText>
        <form novalidate>
          <BaseInput ref="input" label="Email" />
          <div :class="$style.actions">
            <BaseButton type="submit">Continue</BaseButton>
          </div>
        </form>
        <p>Don't have an account? Get started with a <a href="#">quick quote</a> now.</p>
      </div>
      <figure :class="$style.figure">
        <img :class="$style.img" src="@/assets/imgs/signin.jpg" />
      </figure>
    </AppContainer>
  </div>
</template>

<script setup>
import AppContainer from '@/components/AppContainer.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTitle from '../components/BaseTitle.vue';
import BaseText from '../components/BaseText.vue';
import BaseInput from '../components/BaseInput.vue';
import { onMounted, ref } from 'vue';

const input = ref(null)

onMounted(() => {
  input.value.$el.querySelector('input').focus()
})
</script>

<style module>
.modify {
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
}

.wrapper {
  width: 60%;
  background: var(--background);
  position: relative;
  z-index: 1;
  margin-right: -30%;
  max-height: calc(100vh - 276px);
  margin-top: 12vh;
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
}
.figure {
    width: 60%;
    margin: 0;
    padding: 0;
    height: calc(100vh - 82px);
    overflow: hidden;
}

.img {
  display: block;
  max-width: 100%;
}

.actions {
  margin-top: 20px;
}
</style>