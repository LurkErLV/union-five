<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <main>
        <h1 class="test">Hud interface</h1>
        <router-link to="/login">Login</router-link>
    </main>
</template>

<style scoped lang="scss">
main {
    background-color: red;

    .test {
        color: yellowgreen;
    }
}
</style>