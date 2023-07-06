<template>
    <div
      class="user-input"
      :class="{
        'user-input_login': type === 'login',
        'user-input_password': type === 'password',
        'user-input_email': type === 'email',
        'user-input_promo': type === 'promo',
      }"
    >
      <input
        class="user__input"
        :type="type"
        :placeholder="placeholder"
        @input="
          (e) => {
            $emit('update:modelValue', e.target.value);
          }
        "
      />
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    modelValue: String,
    placeholder: String,
    type: String,
  });
  
  const emits = defineEmits(['modelChange']);
  </script>
  
  <style scoped lang="scss">
  .user-input {
    width: 247px;
    height: 63.72px;
  
    .user__input {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 13.9019px;
      border: 1px solid rgba(0, 0, 0, 0);
  
      font-family: 'Neometric Alt', sans-serif;
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