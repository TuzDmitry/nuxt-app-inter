<script setup lang="ts">
//if posts if contain NuxtPage works as layout for posts/new and posts/old

const routes = computed(() => [
  '/posts',
  '/posts/old',
  '/posts/new'
])
</script>

<template>
  <div class="post-container">
    HERE the common part to show general info
    <div>Tabs</div>
    <div class="tabs-container">
      <NuxtLink v-for="route in routes" :to="route">
        <button>{{ route.split('/').pop() }}</button>
      </NuxtLink>
    </div>
    <div class="posts-content">
      <NuxtPage/>
    </div>
  </div>
</template>

<style scoped>
.post-container {
  background-color: bisque;
}
.tabs-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
}
.posts-content {
  width: 100%;
  background-color: aquamarine;
}
</style>
