<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
const Home = () => import("@/views/home/Home");

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
