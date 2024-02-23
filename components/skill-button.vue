<script setup lang="ts">
  defineProps(["selected", "devIcon"]);
</script>

<template>
  <button
      class="text-3xl text-muted bg-background/30 border border-background rounded-md flex justify-center items-center min-h-16 min-w-16 size-16 hover:bg-background/60 hover:text-normal"
      v-bind:class="{ 'shadow-[0_3px_15px] shadow-keyword/20 text-normal': selected }"
  >
    <i v-bind:class="devIcon"></i>
  </button>
</template>