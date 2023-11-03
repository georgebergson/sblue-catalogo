<template>
    <div>
      <NavBar></NavBar>
      <router-view></router-view>
      <BottomBar></BottomBar>
    </div>
  </template>

<script setup lang="ts">
import NavBar from "../../components/NavBar.vue";
import BottomBar from "../../components/BottomBar.vue";
</script>
  