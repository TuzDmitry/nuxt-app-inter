<script setup lang="ts">

</script>

<template>
  <div>
    <h2>Map Content</h2>

<!--    <h3>1. Без обёртки — смотри консоль браузера (Hydration mismatch)</h3>-->
<!--    <BrowserInfo />-->

    <h3>2. В &lt;ClientOnly&gt; — ошибки нет</h3>
    <ClientOnly>
      <BrowserInfo />
      <template #fallback>
        <div>Загрузка виджета…</div>
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped>

</style>
