<template>
  <ul>
    <li>
      <BaseButton link to="/shop/account/user">Ustawienia konta</BaseButton>
    </li>
    <li>
      <BaseButton link to="/shop/account/orders">Zamówienia</BaseButton>
    </li>
    <li>
      <BaseButton link to="/shop/account/returns">Zwroty i reklamacje</BaseButton>
    </li>
  </ul>

    <router-view></router-view>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>