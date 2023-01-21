<template>
  <div class="backdrop" v-if="isModal"></div>
  <Transition name="dialog" mode="out-in">
    <dialog class="modal" open v-if="isModal">
      <header>
        <slot></slot>
        <BaseButton @click="emit('close')"><Icon icon="bi:x-lg" /></BaseButton>
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

defineProps<{
  isModal?: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped lang="scss">
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0.7;
}
.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.2s ease-out;
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
}

.backdrop,
.modal {
  position: fixed;
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
