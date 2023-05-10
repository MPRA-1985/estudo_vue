<template>
  
  <menu-component></menu-component>  
  <router-view />

</template>

<script>

  import MenuComponent from '@/components/MenuComponent.vue'

  export default {
    components: { MenuComponent },

    created() {
      this.$store.dispatch('loadDataCurtaMedia')
    }

  }

</script>

<style>  

  body {
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    color: #444;
    margin: 0;
    line-height: inherit;
  }

  section.blue-section {
    background-color: #02538f;
    color: #fff;
  }
  

</style>
