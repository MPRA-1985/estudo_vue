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

  #app {
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    color: #444;
    margin: 0;
    line-height: inherit;
  }

  #app section.blue-section {
    background-color: #02538f;
    color: #fff;
  }

  #app .curtaMedia {
      margin-top: 3em;
  }

  #app h1 {
      margin-bottom: 1.7em;
      font-weight: 600;
      font-size: 2.5em;
  }

  #app h2 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 35px;
      line-height: 50px;
      text-align: center;
  }

  #app .blue-section h2 {
    color: #fff;
  }

  #app h3 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 700;
      font-size: .85em;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 20px
  }

  #app hr {
      opacity: .2;
  }
  

</style>
