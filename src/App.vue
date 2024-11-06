<template>
    <div id="app">
      <CardList />
    </div>
  </template>
  
  <script lang="ts">
  import CardList from './assets/components/CardList.vue';
  
  export default {
    components: {
      CardList,
    },
  };
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: white;
  }
  </style>
  