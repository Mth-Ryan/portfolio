<script setup lang="ts">
  defineProps(["id"]);
</script>

<template>
  <section id="{{ id }}" class="w-full p-8">
    <Container>
      <slot />
    </Container>
  </section>
</template>
