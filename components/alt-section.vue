<script setup lang="ts">
  defineProps(["id"]);
</script>

<template>
  <section id="{{ id }}" class="w-full bg-background-alt p-8">
    <Container>
      <slot/>
    </Container>
  </section>
</template>