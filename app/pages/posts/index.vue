<script setup lang="ts">

const {data: resp} = await useFetch('/api/posts')
</script>

<template>
  <div>ALL POSTS</div>
  <ul class="posts-list">
    <li class="post-item" v-for="post in resp?.items" :key="post">
      {{ post }}
    </li>
  </ul>
</template>

<style scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

</style>
