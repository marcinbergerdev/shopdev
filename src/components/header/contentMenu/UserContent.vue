<template>
  <section class="">
    <header>
      <h2>Welcome</h2>
      <span>Bergus</span>
    </header>

    <ul>
      <li>
        <Icon icon="cil:user" />
        <span>Twoje konto</span>
      </li>
      <li>
        <Icon icon="bi:heart" />
        <span>ulubione</span>
      </li>
      <li>
        <Icon icon="fluent-mdl2:activate-orders" />
        <span>Zamówienia</span>
      </li>
    </ul>

    <BaseButton>Wyoguj</BaseButton>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "../../../cards/BaseButton.vue";
import { Icon } from "@iconify/vue";
import { computed } from "vue";
</script>

<style scoped lang="scss"></style>
