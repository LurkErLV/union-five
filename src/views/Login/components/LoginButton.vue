<template>
  <button class="user-button" :class="{ 'user-button_link': type === 'link' }" @click="$emit('pressed')">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  type: String,
});

const emits = defineEmits(['pressed']);
</script>

<style scoped lang="scss">
.user-button {
  outline: none;
  border: none;
  width: 350px;
  height: 64px;

  background: linear-gradient(92deg,
      #d8f0fc 1.69%,
      #f8d0d9 48.04%,
      #fde5b9 98.43%);
  border-radius: 12px;

  font-family: 'Neometric Alt', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 12px;

  transition: background ease 0.5s;

  &:last-child {
    margin-bottom: unset !important;
  }

  &_link {
    background: unset;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;

    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: rgba(255, 255, 255, 0.6);
    transition: all ease 0.5s;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0) !important;
      background: rgba(217, 217, 217, 0.05) !important;
    }
  }
  transition: all ease-in-out .1s;
  &:hover {
    filter: brightness(80%);
  }
}
</style>
