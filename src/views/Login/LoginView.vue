<template>
  <!-- <main>
    <h1>Login interface</h1>
    <router-link to="/">Hud</router-link>
  </main> -->


  <main class="wrapper">
    <div class="auth">
      <nav class="auth-navbar">
        <img src="./assets/logo.svg">
        <button class="auth-navbar-button"><img src="./assets/screen.svg"></button>
      </nav>
      <div class="auth-form">
        <h1>Добро пожаловать</h1>
        <h2>Что бы продолжить введите данные</h2>
        <LoginInput placeholder="Введите логин" type="login"/>
        <LoginInput placeholder="Введите пароль" type="password"/>
        <LoginCheckbox label="Запомнить пароль" class="auth__save"
                       :class="{ auth__save_active: currentInfo.state === 'auth' }"/>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import LoginInput from "@/views/Login/components/LoginInput.vue";
import LoginCheckbox from "@/views/Login/components/LoginCheckbox.vue";
import { ref } from "vue";

const currentInfo = ref({
  state: 'auth',
  title: 'Вход на сервер',
  subtitle: 'Авторизация',
  send: 'Войти',
});

const login = ref('');
const password = ref('');
const repeatPassword = ref('');
const email = ref('');
const promo = ref('');
const saveMe = ref(false);

</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-color: #0F0F13;
  background-image: url("./assets/background.svg");
}

.auth {
  display: flex;

  width: 64.375rem;
  height: 44.5rem;

  background-color: red;
  border-radius: 13px;

  &-navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 85%;

    width: 80px;

    background-color: #18181C;
    border-radius: 12px 0 0 12px;

    &-button {
      background: none;
      border: none;
      outline: none;

      transition: all ease-in-out 5s;

      :hover {
        filter: brightness(80);
      }
    }
  }

  &-form {
    width: 475px;
    height: 100%;

    background: #131317;
  }
}
</style>
