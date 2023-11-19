<template>
  <v-app :style="{background: '#85c5ff'}">
    <v-spacer></v-spacer>
    <v-main>
      <router-view />
    </v-main>
    
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
