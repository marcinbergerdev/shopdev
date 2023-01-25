<template>
  <Transition name="dialog" mode="out-in">
    <div class="modalContainer" v-if="isModal">
      <div class="backdrop"></div>

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

        <section class="modalInteraction" v-if="isInteraction">
          <slot name="interactive"></slot>
        </section>
      </dialog>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  isModal: boolean;
  isInteraction: boolean;
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

.modalContainer {
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100vh;
}

.backdrop {
  width: inherit;
  min-height: inherit;
  background-color: #000;
  opacity: 0.5;
}

.modal {
  width: min(80%, 40rem);
  margin: 0 auto;
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