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
    }, 700);
  }
</script>

<template>
  <div class="bg-background-alt border border-background rounded-md flex">
    <div class="py-2 px-4 flex-1 flex gap-2 items-center">
      <slot />
    </div>

    <button
      @click="onClicked"
      class="py-2 px-4 border-s border-background text-muted hover:bg-background hover:text-normal"
    >
      <LucideClipboard v-if="!clicked" class="size-4" />
      <LucideCheck v-if="clicked" class="size-4" />
    </button>
  </div>
</template>
