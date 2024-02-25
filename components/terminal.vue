<script setup lang="ts">
  defineProps<{ skill: { id: string, exampleName: string, code: string } }>();
</script>

<template>
  <div
    class="w-full md:min-h-[26rem] rounded-md bg-background flex flex-col shadow-xl relative transition"
  >
    <div class="flex items-center py-2 ps-4 pe-2 gap-4 justify-between">
      <div class="flex gap-2">
        <button class="size-3 bg-keyword rounded-full"></button>
        <button class="size-3 bg-string rounded-full"></button>
        <button class="size-3 bg-function rounded-full"></button>
      </div>

      <Transition name="fade" mode="out-in">
        <span :key="skill.id" class="py-1 px-3 rounded-md bg-background-alt/30">
            {{ skill.exampleName }}
        </span>
      </Transition>
    </div>

    <div class="flex-1 px-6 pt-2 pb-4 text-sm lg:text-base">
      <Transition name="slide-up" mode="out-in">
        <Code  :key="skill.id" :content="skill.code" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

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