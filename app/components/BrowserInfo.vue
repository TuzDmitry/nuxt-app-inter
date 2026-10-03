<script setup lang="ts">
// Намеренно "плохой" для SSR компонент: его вывод на сервере и в браузере различается.
// - время: сервер рендерит в момент запроса, клиент гидрирует на секунду(ы) позже
// - ширина окна: на сервере нет window, поэтому там 0
const time = new Date().toLocaleTimeString()
const width = import.meta.client ? window.innerWidth : 0
</script>

<template>
  <div class="browser-info">
    <p>Время: {{ time }}</p>
    <p>Ширина окна: {{ width }}px</p>
  </div>
</template>

<style scoped>
.browser-info {
  padding: 8px 12px;
  border: 1px dashed #888;
  margin: 8px 0;
}
</style>
