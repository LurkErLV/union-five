<template>
  <div class="user-input" :class="{
    'user-input_login': type === 'login',
    'user-input_password': type === 'password' || type === 'repeatPassword',
    'user-input_email': type === 'email',
    'user-input_promo': type === 'promo',
  }">
    <input class="user__input" :type="type" :placeholder="placeholder" @input="(e) => {
        switch(type) {
          // @ts-ignore
          case 'login': authStore.login = e.target.value;
          // @ts-ignore
          case 'password': authStore.password = e.target.value;
          // @ts-ignore
          case 'repeatPassword': authStore.repeatPassword = e.target.value;
          // @ts-ignore
          case 'email': authStore.email = e.target.value;
          // @ts-ignore
          case 'promo': authStore.promo = e.target.value;
        }
      }
      " />
  </div>
</template>
  
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const props = defineProps({
  placeholder: String,
  type: String,
});

const authStore = useAuthStore();
</script>
  
<style scoped lang="scss">
.user-input {
  width: 350px;
  height: 70px;

  .user__input {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 13.9019px;
    border: 1px solid rgba(0, 0, 0, 0);
    outline: none;

    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: rgba(255, 255, 255, 0.7);
    transition: all ease 0.5s;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    &::placeholder {
      font-family: 'Neometric Alt', sans-serif;
      color: rgba(255, 255, 255, 0.7);
    }

    padding-left: 60px;
  }

  margin-bottom: 12px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 16px;
    width: 24px;
    height: 24px;
    margin: auto 0;
  }

  &_login {
    &::before {
      background: url('../assets/icons/User.svg');
    }
  }

  &_password {
    &::before {
      background: url('../assets/icons/Password.svg');
    }
  }

  &_email {
    &::before {
      background: url('../assets/icons/Email.svg');
    }
  }

  &_promo {
    &::before {
      background: url('../assets/icons/Promo.svg');
    }

    input {
      background: rgba(229, 176, 68, 0.1) !important;
      border: 1px solid rgba(229, 176, 68, 0.2) !important;
      color: #e5b044 !important;

      &::placeholder {
        color: #e5b044 !important;
      }

      &:hover {
        border: 1px solid rgba(229, 176, 68, 0.5) !important;
      }
    }
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 50px;
    margin: auto 0;

    width: 1px;
    height: 16.8px;

    background: white;
    opacity: 0.1;
  }
}
</style>