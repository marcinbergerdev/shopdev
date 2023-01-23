<template>
  <div class="backdrop" v-if="isModal"></div>
  <Transition name="dialog" mode="out-in">
    <dialog class="modal" open v-if="isModal">
      <header class="modalHeader">
        <slot></slot>
        <BaseButton mode="closeModal" @click="emit('close')"
          ><Icon icon="bi:x-lg"
        /></BaseButton>
      </header>

      <section class="modalContent">
        <slot name="content"></slot>
      </section>

      <section class="modalInteraction">
        <slot name="interactive"></slot>
      </section>
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
.dialog-enter-active {
  transition: all 0.2s ease-in-out;
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
  opacity: 0.5;
}

.modal {
  width: min(80%, 40rem);
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  border-radius: 5px;
  border: none;
}

.modalContent,
.modalInteraction {
  padding: 1.5rem 1.5rem 2rem 1.5rem;
}
.modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #ebebeb;
  border-radius: 5px 5px 0 0;
}
</style>
