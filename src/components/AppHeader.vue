<template>
  <header :class="$style.header">
    <AppContainer :class="$style.modify">
      <router-link class="logo logo--header" :to="{ name: 'Home'}" aria-label="Dayforward Logo">
        <svg height="22" viewBox="0 0 564 102" fill="#1A113Cr" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M58.69 1.23v77.08H43.06V71.7l-5.8 6.3a19.652 19.652 0 0 1-7.63 1.39c-15.41.27-27.5-12-27.23-26.42A25.42 25.42 0 0 1 5 41.62a43.84 43.84 0 0 1 8.16-11.06l7.52-7.68a21 21 0 0 1 8.49-1.67c6 0 11 2.15 13.91 5.37V1.23h15.61Zm-14.4 50.54c.17-9.56-7.25-16.48-15-16.32-6.45 0-12 5.15-12 13.42-.16 9.56 7.14 16.44 14.88 16.28 6.48 0 12.12-5.15 12.12-13.38ZM110.39 40.71v37.6H94.76V73l-4.89 5a19.43 19.43 0 0 1-7.3 1.29C72.31 79.54 64 71.92 64.2 61.66c-.16-11 8.92-18.59 20-18.43a19.74 19.74 0 0 1 10.58 2.69V41c0-4.51-2.31-7.52-6.44-7.52a6.41 6.41 0 0 0-6.83 6H66.13c.33-11.06 11-18.31 22.4-18.21 12.19-.16 21.97 6.44 21.86 19.44ZM95.67 60.37c0-4-3.43-7.14-8-7.14s-7.78 3.22-7.78 7.25a6.88 6.88 0 0 0 2.2 5.15 7.73 7.73 0 0 0 5.58 2.1c4.57 0 8-3.23 8-7.36ZM174.66 22.29l-17.24 52.85a37.526 37.526 0 0 1-2.9 6.77 30.37 30.37 0 0 1-4.3 5.58l-11.28 11.93H121.6V84.7H134c3.06 0 5.15-1.67 6.28-5.16l2-6.6h-11.39L111.6 22.29h17.57l15.63 42.27 12.94-42.27h16.92ZM206 14.88c-3.87 0-5.16 1.28-5.16 5.15v2.26h11.49v13.43h-11.54v42.59h-15.63V35.72h-9.29V22.29h9.29v-1.35c0-3.49 1.07-5.58 3.65-8.21l10.91-11.44h12.56v13.59H206ZM211.3 53.12c-.018-3.8.731-7.565 2.2-11.07a36.282 36.282 0 0 1 7.57-10.63l8.17-8.33a25.768 25.768 0 0 1 10.47-1.88c16-.27 28.36 12 28.09 26.32a27.757 27.757 0 0 1-2.15 11 36.709 36.709 0 0 1-7.84 10.85L250 77.45a26.281 26.281 0 0 1-10.64 1.93c-15.93.27-28.36-11.97-28.06-26.26Zm41.57-1.35c.16-9.29-7.2-16.48-14.83-16.32-6.33 0-11.87 5.15-11.87 13.37-.16 9.29 7.2 16.49 14.83 16.33 6.33 0 11.87-5.15 11.87-13.38ZM305.82 22.29v15.9h-8.05c-6.72 0-9.94 3.06-9.94 9.88v30.24H272.2v-56h15.63v9l8.54-9 9.45-.02ZM377 22.29h16.28l-14.4 56h-21.36l-7.25-40.39-7.58 40.39h-21l-14.44-56h16.54l8.81 42.05 7.25-42.05h20.89L368.31 65 377 22.29ZM438.82 40.71v37.6h-15.63V73l-4.89 5a19.49 19.49 0 0 1-7.31 1.29c-10.26.16-18.53-7.46-18.37-17.72-.16-11 8.92-18.59 20-18.43a19.75 19.75 0 0 1 10.59 2.69V41c0-4.51-2.31-7.52-6.45-7.52a6.41 6.41 0 0 0-6.82 6h-15.38c.32-11.06 11-18.31 22.4-18.21 12.19-.16 21.96 6.44 21.86 19.44ZM424.1 60.37c0-4-3.44-7.14-8-7.14-4.56 0-7.79 3.22-7.79 7.25a6.879 6.879 0 0 0 2.2 5.15 7.741 7.741 0 0 0 5.59 2.1c4.56 0 8-3.23 8-7.36ZM480.53 22.29v15.9h-8.06c-6.71 0-9.94 3.06-9.94 9.88v30.24H446.9v-56h15.63v9l8.54-9 9.46-.02ZM536 1.23v77.08h-15.64V71.7l-5.8 6.29a19.654 19.654 0 0 1-7.63 1.39c-15.41.27-27.5-12-27.23-26.42a25.415 25.415 0 0 1 2.58-11.34 43.84 43.84 0 0 1 8.16-11.06l7.56-7.68a21.07 21.07 0 0 1 8.49-1.67c6 0 11 2.15 13.91 5.37V1.23H536Zm-14.4 50.54c.16-9.56-7.25-16.48-15-16.32-6.44 0-12 5.15-12 13.42-.16 9.56 7.14 16.44 14.88 16.28 6.52 0 12.12-5.15 12.12-13.38Z"/></g></svg>
      </router-link>
      <a :class="$style.phone" href="#">+1 888-434-0228</a>
    </AppContainer>
    <!-- <Transition name="slide">
      <TheNav v-show="toggled" />
    </Transition> -->
  </header>
</template>

<script setup>
import AppContainer from './AppContainer.vue';

const color = "#1A113C";
const size = "22";

</script>

<style module>
.header {
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  background: var(--background);
}
.modify {
  position: relative;
  z-index: 9;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 0;
  align-items: center;
  height: 82px;
  background: var(--background);
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 1120px;
}
.menu {
  grid-column: -1;
  background: transparent;
  border: 0;
  padding: 0;
  width: 42px;
  height: 42px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}

.phone {
  grid-column-start: -1;
  justify-self: end;
  font-size: .75rem;
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  letter-spacing: .04rem;
}

.start {
  grid-column-start: 11;
  grid-column-end: -1;
  /* border: red solid; */
  border-radius: 24px;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  background: var(--primary);
  color: white;
  justify-self: center;
  text-transform: uppercase;
  font-size: .75rem;
}
</style>