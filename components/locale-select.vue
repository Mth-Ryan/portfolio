<script setup lang="ts">
  const { locale } = useI18n();

  const open = ref(false);

  const options = {
    en: {
      title: "English",
      flagCode: "us"
    },
    pt: {
      title: "Português",
      flagCode: "br"
    },
  };

  const flagSrc = (code: string) =>
      `https://flagcdn.com/${code}.svg`
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center gap-2 px-3 py-1 rounded-md transition hover:bg-background-alt/30"
      :class="{ 'bg-background-alt/30': open }"
      @click="() => { open = !open }">
      <img
        class="size-7 rounded"
        alt=""
        :src="flagSrc(options[locale].flagCode)"
      />
      {{ options[locale].title }}
      <LucideChevronUp class="size-4" v-if="open" />
      <LucideChevronDown class="size-4" v-else />
    </button>
    <div class="absolute right-0 mt-2 flex flex-col gap-2 p-3 rounded-md border border-background shadow-lg bg-background-alt/30" v-if="open">
      <button
        class="flex gap-2 items-center"
        v-for="(option, key) in options"
        :key="key"
        @click="() => {
          // @ts-ignore
          locale = key
          open = false;
        }"
      >
        <img
            class="size-7 rounded"
            alt=""
            :src="flagSrc(option.flagCode)"
        />
        {{ option.title }}
      </button>
    </div>
  </div>
</template>
