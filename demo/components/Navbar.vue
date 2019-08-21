<template>
  <div class="navbar">
    <n-link to="/" class="link">Home</n-link>
    <n-link to="secret" class="link">Secret</n-link>
    <n-link to="login" class="link">Login</n-link>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  background-color: green;
}

.link {
  padding: 1rem;
  color: white;
  text-decoration: none;
}

.link:hover {
  color: black;
}
</style>