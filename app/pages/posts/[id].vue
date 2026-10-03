<script setup lang="ts">
//Nuxt/Vue Router роуты не матчатся по объявлению, а ранжируются по специфичности пути. Статический сегмент (/posts/new, /posts/old)
//всегда весит больше, чем динамический (/posts/[id]), независимо от того, в каком порядке лежат файлы или создавались роуты.

//    Технически это делает движок vue-router (path-to-regexp-подобный matcher): каждому сегменту присваивается "score" — static > dynamic > catch-all. При резолве URL /posts/new
//сначала проверяются все точные совпадения, и только если ни одно не подошло, роутер пробует [id]. Поэтому id: "new" никогда не сработает, пока существует явный файл new.vue.
</script>

<template>
  <div>POST ID</div>
  <div>{{ $route.params.id }}</div>
</template>

<style scoped>

</style>
