<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: MixinGetColor('red1'),
      },
    }"
  >
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
import "@/assets/main.css";
import { MixinGetColor } from "@/utils/mixins";
</script>
