<template>
  <button :class="$style.button" type="button"><slot /></button>
</template>

<style module>
.button {
  padding: 18px 44px;
  font-size: 1rem;
  border-radius: 24px;
  border: 1px solid transparent;
  background: var(--primary);
  color: var(--cream);
  text-transform: uppercase;
  letter-spacing: .04rem;
  transition: background-color 230ms ease-in-out;
}
.button:hover {
  background: #271A5A;
}
</style>