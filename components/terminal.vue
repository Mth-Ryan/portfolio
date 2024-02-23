<script setup lang="ts">
  defineProps<{ skill: { exampleName: string, code: string } }>();
</script>

<template>
  <div class="w-full lg:min-h-[26rem] rounded-md bg-background flex flex-col shadow-xl">
    <div class="flex items-center py-2 ps-4 pe-2 gap-4 justify-between">
      <div class="flex gap-2">
        <button class="size-3 bg-keyword rounded-full"></button>
        <button class="size-3 bg-string rounded-full"></button>
        <button class="size-3 bg-function rounded-full"></button>
      </div>

      <span class="py-1 px-3 rounded-md bg-background-alt/30">
          {{ skill.exampleName }}
      </span>
    </div>

    <div class="flex-1 px-6 pt-2 pb-4 text-sm md:text-base">
      <Code :content="skill.code" />
    </div>
  </div>
</template>