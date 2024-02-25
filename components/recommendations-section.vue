<script setup lang="ts">

</script>

<template>
  <Section id="recommendations">
    <div class="flex gap-3 items-center">
      <LucideSparkle class="size-6 lg:size-8 text-string" />
      <h2 class="text-2xl lg:text-3xl">{{ $t("recommendations") }}</h2>
    </div>
    <p class="mt-2 text-muted text-sm lg:text-base">
      {{ $t("recommendationsDescription") }}
    </p>

    <div
      v-motion-fade-visible-once
      class="mt-12  flex flex-col-reverse lg:grid grid-cols-[18.3rem_auto] gap-6 items-center"
    >
      <div class="mx-auto">
        <img
          alt=""
          class="rounded-full h-44 lg:h-52 drop-shadow-xl"
          src="~/assets/images/avatar-rodirgo.png"
        />
      </div>

      <div class="flex flex-col gap-4">
        <ShowMore>
          <p class="text-normal/80 text-sm lg:text-base">
            I wholeheartedly recommend Ryan for <span class="text-keyword">his exceptional skills as a Fullstack developer</span>.
            Having witnessed firsthand his dedication to staying at the forefront of technology,
            Ryan's creation of a high-performing commercial website at
            http://www.saionaracosmeticos.com.br, employing cutting-edge technology and AWS expertise,
            is a testament to his commitment to excellence.
            His software development proficiency and deep understanding of best practices make him an invaluable asset to any team.
            Ryan's unwavering passion for staying at the vanguard of technology and his impeccable work
            ethic make him an exemplary professional.
          </p>
        </ShowMore>

        <div class="flex flex-col gap-1">
          <div class="flex gap-2 items-center">
            <div class="w-4 h-px bg-keyword" />
            <div class="font-semibold text-sm lg:text-base">Rodrigo Costa</div>
          </div>
          <div class="font-light text-sm lg:text-base">{{ $t("recommendationRodrigoTitle") }}</div>
        </div>
      </div>
    </div>
  </Section>
</template>