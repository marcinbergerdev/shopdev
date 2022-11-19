<template>
  <header>
    <router-link class="logoLink" to="/">Shopex</router-link>
    <SearchContainer></SearchContainer>
    <NavigationList></NavigationList>
  </header>


</template>


<script setup lang="ts">
import NavigationList from './nav/NavigationList.vue';
import SearchContainer from './search/SearchContainer.vue';



</script>

<style scoped lang="scss">


@mixin flexDefault {
  display: flex;
  align-items: center;
}

</style>
