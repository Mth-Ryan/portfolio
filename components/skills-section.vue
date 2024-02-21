<script setup lang="ts">

</script>

<template>
  <AltSection id="skills">
    <div class="flex gap-3 items-center">
      <LucideCode2 class="size-8 text-function" />
      <h2 class="text-3xl">Habilidades</h2>
    </div>

    <div class="grid grid-cols-2 gap-12 mt-8">
      <Terminal />

      <div class="flex flex-col gap-4">
        <h3 class="text-xl">Golang</h3>
        <p class="text-muted">
          Desenvolvo aplicações em Golang a 3 anos, criando
          Cli's, Rest API's e ferramentas para deploy de aplicações
          na cloud.
        </p>

        <div class="grid grid-cols-6 gap-4 mt-4">
          <SkillButton dev-icon="devicon-dotnetcore-plain" />
          <SkillButton dev-icon="devicon-go-original-wordmark" :selected="true" />
          <SkillButton dev-icon="devicon-rust-original" />
          <SkillButton dev-icon="devicon-typescript-plain" />
          <SkillButton dev-icon="devicon-nextjs-original-wordmark" />
          <SkillButton dev-icon="devicon-nuxtjs-plain" />
          <SkillButton dev-icon="devicon-nodejs-plain-wordmark" />
          <SkillButton dev-icon="devicon-tailwindcss-original" />
          <SkillButton dev-icon="devicon-linux-plain" />
          <SkillButton dev-icon="devicon-nginx-original" />
          <SkillButton dev-icon="devicon-redis-plain" />
          <SkillButton dev-icon="devicon-azuresqldatabase-plain" />
          <SkillButton dev-icon="devicon-docker-plain" />
          <SkillButton dev-icon="devicon-amazonwebservices-plain-wordmark" />
          <SkillButton dev-icon="devicon-ansible-plain" />

        </div>
      </div>
    </div>
  </AltSection>
</template>