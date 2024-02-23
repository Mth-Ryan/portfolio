<script setup lang="ts">
</script>

<template>
  <header class="w-full px-8 py-4">
    <Container>
      <div class="flex justify-between items-center">
        <span>Logo</span>

        <nav class="hidden md:block">
          <ul class="flex gap-6 text-muted">
            <li>
              <a href="#about">{{ $t("about") }}</a>
            </li>
            <li>
              <a href="#skills">{{ $t("skills") }}</a>
            </li>
            <li>
              <a href="#projects">{{ $t("projects") }}</a>
            </li>
            <li>
              <a href="#recommendations">{{ $t("recommendations") }}</a>
            </li>
            <li>
              <a href="#contact">{{ $t("contact") }}</a>
            </li>
          </ul>
        </nav>

        <LocaleSelect />
      </div>
    </Container>
  </header>
</template>