<template>
  <div class="backdrop" v-if="isDialog"></div>
  <Transition name="dialog" mode="out-in">
    <dialog class="modal" open v-if="isDialog">
      <header>
        <slot></slot>
      </header>

      <section>
        <slot name="content"></slot>
      </section>

      <button>
        <slot name="interactive"></slot>
      </button>
    </dialog>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isDialog = ref(false);
</script>

<style scoped lang="scss">
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0.6;
}
.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.4s ease-out;
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
}

.backdrop,
.modal {
  position: absolute;
  top: 0;
}

.backdrop {
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  opacity: 0.4;
}

.modal {
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
