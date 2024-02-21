<script setup lang="ts">
  defineProps(["id"]);
</script>

<template>
  <section v-bind:id="id" class="w-full px-8 py-10">
    <Container>
      <slot />
    </Container>
  </section>
</template>
