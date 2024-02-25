<script setup lang="ts">
  const props = defineProps(["value"]);
  const clicked = ref(false);

  function toClipboard() {
    navigator.clipboard.writeText(props.value);
  }

  function onClicked() {
    toClipboard();
    clicked.value = true;
    setTimeout(() => {
      clicked.value = false;
    }, 1500);
  }
</script>

<template>
  <div class="bg-background-alt border border-background rounded-md flex">
    <div class="py-2 px-4 flex-1 flex gap-2 items-center">
      <slot />
    </div>

    <button
      @click="onClicked"
      class="py-2 px-4 border-s border-background text-muted hover:bg-background hover:text-normal relative"
    >
      <Transition mode="out-in" name="slide-up">
        <LucideClipboard v-if="!clicked" class="size-4" />
        <LucideCheck v-else class="size-4" />
      </Transition>
    </button>
  </div>
</template>

<style scoped>
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.1s ease-out;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(15px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-15px);
  }
</style>