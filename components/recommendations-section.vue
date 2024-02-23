<script setup lang="ts">

</script>

<template>
  <Section id="recommendations">
    <div class="flex gap-3 items-center">
      <LucideSparkle class="size-8 text-string" />
      <h2 class="text-3xl">{{ $t("recommendations") }}</h2>
    </div>
    <p class="mt-2 text-muted">
      {{ $t("recommendationsDescription") }}
    </p>

    <div class="mt-16 grid grid-cols-[auto_18.3rem] gap-6 items-center">
      <div class="flex flex-col gap-4">
        <p class="text-normal/80">
          I wholeheartedly recommend Ryan for <span class="text-keyword">his exceptional skills as a Fullstack developer</span>.
          Having witnessed firsthand his dedication to staying at the forefront of technology,
          Ryan's creation of a high-performing commercial website at
          http://www.saionaracosmeticos.com.br, employing cutting-edge technology and AWS expertise,
          is a testament to his commitment to excellence.
          His software development proficiency and deep understanding of best practices make him an invaluable asset to any team.
          Ryan's unwavering passion for staying at the vanguard of technology and his impeccable work
          ethic make him an exemplary professional.
        </p>

        <div class="flex flex-col gap-1">
          <div class="flex gap-2 items-center">
            <div class="w-4 h-px bg-keyword" />
            <div class="font-semibold">Rodrigo Costa</div>
          </div>
          <div class="font-light">{{ $t("recommendationRodrigoTitle") }}</div>
        </div>
      </div>

      <div class="mx-auto">
        <img class="rounded-full h-64" src="~/assets/images/avatar-rodirgo.png" />
      </div>
    </div>
  </Section>
</template>