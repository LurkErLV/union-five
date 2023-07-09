import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const login = ref('');
  const password = ref('');
  const repeatPassword = ref('');
  const email = ref('');
  const promo = ref('');
  const rememberMe = ref(false);



  return { login, password, repeatPassword, email, promo, rememberMe };
});
