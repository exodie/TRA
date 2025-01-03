<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/logo/Logo.vue'
</script>

<template>
  <div id="app">
    <nav>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <RouterLink to="/auth/signin">Sign In</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 20px;
}

nav,
main {
  padding-block: 8px;
  padding-inline: 18px;
}

nav > a + a {
  margin-left: 10px;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
