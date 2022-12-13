<script setup>
import Sidebar from "../components/Sidebar.vue";
import Searchbar from "../components/Searchbar.vue";
</script>

<template>
  <Sidebar route="home" />
  <div class="main text-center p-3 px-5">
    <Searchbar route="home" />

    <header class="mx-5 mt-4">
      <h1 class="title text-left mt-3">DESTAQUES</h1>
      <div class="border border-2 border-dark mt-3"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "Alkes", sans-serif;
  font-weight: bold;
  font-size: 35px;
}
</style>
