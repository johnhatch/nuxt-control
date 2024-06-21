<script setup lang="ts">
const { data: results } = await useFetch('/api/spotify');
</script>

<template>
  <div>
    <div v-for="track in results" class="border">
      {{ track }}
    </div>
  </div>
</template>

<style>
.border {
  border: 1px solid red;
}
</style>
