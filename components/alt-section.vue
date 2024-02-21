<script setup lang="ts">
  defineProps(["id"]);
</script>

<template>
  <section id="{{ id }}" class="w-full bg-background-alt px-8 py-10">
    <Container>
      <slot/>
    </Container>
  </section>
</template>