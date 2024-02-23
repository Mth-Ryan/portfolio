<script setup lang="ts">
  defineProps(["content"]);
</script>

<template>
  <div class="code" v-html="content" />
</template>