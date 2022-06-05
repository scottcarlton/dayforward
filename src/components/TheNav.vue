<template>
  <div :class="$style.dropdown">
    <AppContainer :class="$style.modify">
      <Transition name="slide-fade">
        <nav :class="[$style.nav]" v-show="toggled">
        <router-link :class="[$style.link]" :to="{ name: 'Why'}" @click="closeNav">Why Dayforward</router-link>
        <router-link :class="[$style.link]" :to="{ name: 'About'}" @click="closeNav">About</router-link>
        <router-link :class="[$style.link]" :to="{ name: 'Help'}" @click="closeNav">Help</router-link>
        <router-link :class="[$style.link]" :to="{ name: 'Signin'}" @click="closeNav">Signin</router-link>
      </nav>
      </Transition>
      <div :class="$style.contact">
        <div :class="$style.col">
          <span :class="$style.label">Phone</span>
          <a :class="$style.phone" href="#">+1 888-434-0228</a>
        </div>
        <div :class="$style.col">
          <span :class="$style.label">Email</span>
          <a :class="$style.email" href="#">help@dayforward.com</a>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script setup>
import { ref, inject } from '@vue/runtime-core';
import AppContainer from './AppContainer.vue';

const api = inject("context");
const toggled = ref(api.toggled);

function closeNav() {
  toggled.value = false
}
</script>

<style module>
.dropdown {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: var(--background);
}

.modify {
  display: grid;
  gap: 4%;
  align-items: flex-end;
  height: 90%;
  max-width: 1120px;
  padding: 6rem 30px;
}


.nav {
  display: grid;
  gap: 12px;
  text-align: left;
  font-size: 2.125rem;
}

.link {
  color: var(--primary);
  text-decoration: none;
}

.contact {
  display: grid;
  gap: 12%;
}

.col {
  display: grid;
}

.label {
  margin-bottom: .5rem;
}
.phone,
.email {
  color: #797670;
  text-decoration: none;
  letter-spacing: 0.04rem;
  font-size: .875rem;
}

@media (min-width: 720px) {
  .modify {
      padding-left: 60px;
      padding-right: 60px;
  }
}

@media (min-width: 992px) {

  .dropdown,
  .modify {
    height: auto;
  }
  .modify {
    grid-template-columns: repeat(12,minmax(0,1fr));
  }

  .nav {
    grid-column: span 5/span 5;
    order: 2;
    padding-top: 6rem;
    text-align: right;
  }

  .contact {
    grid-column: span 7/span 7;
    grid-template-columns: 48% 48%;
    gap: 4%;
  }
}

@media (min-width: 1025px) {
  .nav {
    font-size: 3rem;
  }
}

@media (min-width: 1280px) {
  .modify {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>

<style>
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transition: opacity 1000ms ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transition: opacity 230ms ease-in-out;
}
</style>