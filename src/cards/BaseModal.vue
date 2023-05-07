<template>
  <Transition name="dialog" mode="out-in">
    <div class="modalContainer" v-if="isModal">
      <div class="backdrop" @click="emit('close')"></div>

      <dialog class="modal" :class="mode" open v-if="isModal">
        <header class="modalHeader">
          <slot></slot>
          <BaseButton
            id="searchListElement"
            mode="closeModal"
            v-if="isHeaderCloseButton"
            @click="emit('close')"
            ><Icon class="modalHeader__closeBtn" icon="bi:x-lg"
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
  mode?: string;
  isModal: boolean;
  isInteraction: boolean;
  isHeaderCloseButton: boolean;
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
  z-index: 100;
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
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 5px 5px 0 0;

  &__closeBtn {
    pointer-events: none;
  }
}

.deleteAllOrders {
  text-align: center;
  border-radius: 35px;
  .modalHeader {
    justify-content: center;
    border-radius: 35px 35px 0 0;
    padding: 2rem 0;
    background-color: var(--primary-claret);
    color: var(--white);
  }

  .modalContent {
    margin-top: 2rem;
  }
}
.modalInteraction {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 0 3rem;
}

.closeModal {
  margin-right: 1rem;
}

.registerAuth {
  border-radius: 50px;

  .modalHeader {
    border-radius: 50px 50px 0 0;
  }
}

.productDetails {
  top: 5%;
  display: flex;
  flex-direction: column;
  width: min(95%, 100rem);
  height: 75vh !important;
  overflow: auto;

  @media (min-width: 768px) {
    height: auto;
  }

  .modalHeader {
    justify-content: flex-end;
    padding: 1rem 0;
  }

  .modalContent {
    flex: 1;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "productImg productDetails"
        "description description";
    }
  }

  .modalInteraction {
    display: flex;
    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
