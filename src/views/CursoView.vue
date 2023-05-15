<template>

<fgv-loader v-if="isLoading"></fgv-loader>

<div class="cursos" :tipo="tipo" :modalidade="modalidade" v-else>
  
  <section class="mt-20 mb-20">

    <div class="container mx-auto">

      <h1>Cursos de {{ tipo }} duração: <span>{{ modalidade }}</span></h1>

      <div class="flex">

        <div class="txt_cursos w-1/2 pr-20">

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum turpis, sollicitudin vel volutpat in, vestibulum eget ligula. Sed eleifend lectus eu sodales tristique. Fusce faucibus ut eros at dignissim. Proin a lacus lorem.</p>

          <p>Nunc placerat libero et neque volutpat luctus. Maecenas posuere mauris vel consequat varius. Nunc est mauris, tincidunt semper velit et, auctor varius leo.</p>

          <p>Fusce elementum elit in sapien elementum, eget faucibus libero auctor. Sed eu tortor ut elit maximus laoreet. Maecenas non metus ac nunc interdum vulputate. Suspendisse placerat ultrices odio, vitae placerat est. Praesent aliquam nisl mi, sed rhoncus erat fermentum non.</p>

          <p>Quisque ipsum turpis, sollicitudin vel volutpat in, vestibulum eget ligula. Sed eleifend lectus eu sodales tristique.</p>
          
        </div>

        <div class="icones_areas w-1/2 pl-20">

          <h2>Escolha uma área de conhecimento</h2>  

        </div>

      </div>
    
    </div>

  </section>
  
</div>  
    
</template>
  
<script>

  import FgvLoader from '@/components/FgvLoader.vue';

  export default {

    components: { FgvLoader },

    computed: {

      isLoading () {
        return this.$store.getters.getLoadingData
      }

    },

    props: ['tipo', 'modalidade']

  };

</script>

<style scoped>

  [modalidade='online'] h1 span {
    color: #bb0043;
  }

  [modalidade='presencial'] h1 span {
    color: #3bae96;
  }

  [modalidade='live'] h1 span {
    color: #9c64a2;
  }

  h2 {
    font-size: 25px;
  }

  p {
    margin-bottom: 20px;
  }

  .txt_cursos {
    border-right: 1px dashed #ccc;
    text-align: justify;
  }

</style>