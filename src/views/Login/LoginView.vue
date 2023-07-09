<template>
  <main class="wrapper">
    <div class="auth">
      <nav class="auth-navbar">
        <img src="./assets/logo.svg">
        <button class="auth-navbar-button"><img src="./assets/screen.svg"></button>
      </nav>
      <div class="auth-form">
        <h1 class="auth-form__title">Добро пожаловать</h1>
        <h2 class="auth-form__subtitle">Что бы продолжить введите данные</h2>
        <div class="inputs">
          <LoginInput placeholder="Введите логин" type="login" />
          <LoginInput placeholder="Введите пароль" type="password" />
          <LoginCheckbox label="Запомнить пароль" class="auth-form__save" />
          <LoginButton text="Войти" />
          <LoginButton text="Создать аккаунт" type="link" />
        </div>
        <hr class="auth-form__line">
        <div class="auth-form-forgot">
          <p class="auth-form-forgot__text">Забыли пароль?</p>
          <LoginForgot />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import LoginInput from "@/views/Login/components/LoginInput.vue";
import LoginCheckbox from "@/views/Login/components/LoginCheckbox.vue";
import LoginButton from "./components/LoginButton.vue";
import LoginForgot from "./components/LoginForgot.vue";
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

.inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    display: flex;
    flex-direction: column;

    padding: 44px 60px;

    width: 475px;
    height: 100%;

    background: #131317;

    &__title {
      font-size: 16px;
      font-weight: 700;

      margin-bottom: 15px;
    }

    &__subtitle {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
      font-weight: 500;

      margin-bottom: 30px;
    }

    &__save {
      margin: 18px 0 30px;
    }

    &__line {
      height: 1px;
      width: 355px;

      border: none;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.05);

      margin: 45px 0;
    }

    &-forgot {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__text {
        color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
