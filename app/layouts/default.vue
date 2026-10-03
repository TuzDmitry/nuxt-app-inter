<script setup lang="ts">

const sidebarStore = useSidebarStore()
console.log(sidebarStore.getIsSidebarOpen, 'dsa')
</script>

<template>
  <div class="layouts">
    <header>
      <h1>HEADER</h1>
    </header>
    <main>
      <aside :class="{ open: sidebarStore.getIsSidebarOpen }">
        <button class="toggle" @click="sidebarStore.togggleSidebar">
          {{ sidebarStore.getIsSidebarOpen ? 'Close' : 'Open' }}
        </button>
        <div class="sidebar-content">
          SIDEBAR
        </div>
      </aside>
      <slot/>
    </main>
    <footer>
      <h1>FOOTER</h1>
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.layouts {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
header {
  background-color: darkseagreen;
}
footer {
  background-color: #bcbb8f;
}
main {
  flex-grow: 1;
  display: grid;
  grid-template-columns: auto 1fr;
}
aside {
  background-color: aqua;
  width: 70px;
  overflow: hidden;
  white-space: nowrap;
  transition: width 0.3s ease;
}
aside.open {
  width: 250px;
}
.toggle {
  margin: 8px;
}
.sidebar-content {
  padding: 8px;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
aside.open .sidebar-content {
  opacity: 1;
  transform: translateX(0);
}
</style>
