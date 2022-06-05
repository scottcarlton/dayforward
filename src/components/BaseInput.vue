<template>
  <div :class="[$style.element, {[$style.focused]: focused }, {[$style.active]: active }]">
    <label :class="[$style.label]" v-if="label || $slots.label"><slot name="label">{{ label }}</slot></label>
    <input ref="input" :class="[$style.input]" @focus="handleFocus" @blur="handleBlur" @input="handleInput"/>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"

const props = defineProps({
  label: {
    type: String,
  }
})

const input = ref(null)
const focused = ref(false)
const active = ref(false)
const dirty = ref(false)

function handleFocus() {
  focused.value = true;
}

function handleBlur() {
  focused.value = false;
}

function handleInput() {
  dirty.value = true;
  if (input.value.value.length) active.value = true;
  if (!input.value.value.length) active.value = false;
}
</script>

<style module>
.element {
  position: relative;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #B6B1A8;
  transition: box-shadow 230ms ease-in-out;
  background: #F9F6F0;
}

.element.focused {
  box-shadow: 0 0 0 1px var(--primary);
}
.label {
  font-size: 1rem;
  position: absolute;
  top: 14px;
  right: auto;
  left: 12px;
  z-index: 0;
  opacity: .5;
  transition: top 230ms ease-in-out, opacity 230ms ease-in-out;
}

.active .label {
  font-size: .65rem;
  top: 2px;
  opacity: 1;
}

.input {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  padding: 16px 12px;
  width: 100%;
  border: 0;
  border-radius: 4px;
  outline: 0;
  background: transparent;
}

.active .input {
  padding: 19px 12px 13px;
}
</style>
