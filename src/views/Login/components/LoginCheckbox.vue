<template>
  <div class="user-checkbox" @click="(e) => {
      authStore.rememberMe = !authStore.rememberMe;
    }
    ">
    <div class="user-checkbox__checkbox">
      <div class="user-checkbox__inner" :class="{ 'user-checkbox__inner_active': authStore.rememberMe }"></div>
    </div>
    <div class="user-checkbox__label">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const props = defineProps({
  label: String,
});

const authStore = useAuthStore();
</script>

<style scoped lang="scss">
.user-checkbox {
  display: flex;
  align-items: center;

  &__checkbox {
    cursor: pointer;

    width: 22px;
    height: 22px;

    border: 1px solid #f2cc83;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__inner {
    transition: all ease 0.2s;
    width: 12px;
    height: 12px;
    background: #f2cc83;
    border-radius: inherit;
    opacity: 0;

    &_active {
      transition: all ease 0.2s;
      opacity: 1;
    }
  }

  &__label {
    margin-left: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>