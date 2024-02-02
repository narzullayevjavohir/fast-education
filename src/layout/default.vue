<template>
  <div class="layout">
    <Sidebar />
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/layout/sidebar.vue";
</script>
