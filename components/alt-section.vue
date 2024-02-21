<script setup lang="ts">
  defineProps(["id"]);
</script>

<template>
  <section v-bind:id="id" class="w-full bg-background-alt px-8 py-16">
    <Container>
      <slot/>
    </Container>
  </section>
</template>