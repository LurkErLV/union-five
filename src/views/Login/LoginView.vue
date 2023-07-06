
<template>
  <!-- <main>
    <h1>Login interface</h1>
    <router-link to="/">Hud</router-link>
  </main> -->
  

  <main class="wrapper">
    <div class="login">
      <nav class="login__navbar">
        <img src="./assets/logo.svg">
        <button class="login__navbar-button"><img src="./assets/screen.svg"></button>
      </nav>
      <div class="login__form">
        <h1>Добро пожаловать</h1>
        <h2>Что бы продолжить введите данные</h2>
        <LoginInput placeholder="Test" type="login" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import LoginInput from "./components/LoginInput.vue"; 
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

  .login {
    display: flex;

    width: 64.375rem;
    height: 44.5rem;

    background-color: red;
    border-radius: 13px;

    &__navbar {
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
  }
</style>
