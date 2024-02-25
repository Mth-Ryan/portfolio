<script setup lang="ts">
  const expanded = ref(false);
</script>

<template>
  <div class="relative w-full">
    <div class="overflow-hidden transition" :class="{ 'max-h-28': !expanded }">
      <slot />
    </div>
    <div
      class="w-full flex justify-center p-2 bg-gradient-to-b from-transparent to-background to-60% via-background/90"
      :class="{ 'absolute bottom-0 pt-8 pb-0': !expanded }"
    >
      <button
        @click="() => { expanded = !expanded }"
      >
        <span
            v-if="expanded"
            class="flex items-center gap-2"
        >
          {{ $t("showLess") }}
          <LucideChevronUp class="size-4" />
        </span>
        <span
          v-else
          class="flex items-center gap-2"
        >
          {{ $t("showMore") }}
          <LucideChevronDown class="size-4" />
        </span>
      </button>
    </div>
  </div>
</template>
