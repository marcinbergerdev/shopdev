<template>
  <form>
    <input type="text" placeholder="Wyszukaj...">
  </form>
</template>


<script setup lang="ts">





</script>

<style scoped lang="scss">
form {
  width: 80%;
}

input {
  padding: 0.5rem;
  width: 100%;
  border-radius: 10px;
  border: 3px solid var(--primary-claret);
  outline: none;
  color: var(--primary-greyDark);
}

input:focus {
  transition: .150s ease-in-out;
  border: 3px solid var(--primary-greyDark);
}
</style>
