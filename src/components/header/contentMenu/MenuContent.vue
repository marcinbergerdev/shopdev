<template>
    <article class="menuContainer">
      <UserContent v-if="menuName === 'user'"></UserContent>
      <CartContent v-if="menuName === 'cart'"></CartContent>
    </article>
</template>

<script setup lang="ts">
import UserContent from './UserContent.vue';
import CartContent from './CartContent.vue';

import { defineProps } from 'vue'

const {} = defineProps<{
  menuName?: string
}>();
</script>

<style scoped lang="scss">
.menuContainer{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 4.3rem);



  background-color: var(--white);

}

</style>
