<template>

  <fgv-loader v-if="isLoading"></fgv-loader>

  <div class="cursos" :tipo="tipo" :modalidade="modalidade" v-else>
    
    <section class="mt-20 mb-20">

      <div class="container mx-auto">

        <h1>Cursos de {{ tipo }} duração: <span>{{ modalidade }}</span></h1>

        <div class="flex gap-8">

          <h2>Área de conhecimento:</h2>

          <select name="" id="" v-model="areaSelecionada" @change="capturarAreaSelecionada">
            <option value="Todas">Todas</option>
            <option v-for="area in listaAreas" :key="area" :value="area">{{ area }}</option>
          </select>

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

      listaAreas() {
        return this.$store.getters.getListaAreas; 
      },

      isLoading () {
        return this.$store.getters.getLoadingData
      }

    },

    methods: {

      capturarAreaSelecionada() {
        const area = this.areaSelecionada; // Captura o valor selecionado
        console.log('Área selecionada: ' + area);
        this.$store.dispatch('listaCursosDeUmaArea', area); // Chama a action listaCursosDeUmaArea com o valor selecionado
      }

    },

    data() {

      return {
        areaSelecionada: 'Todas' // Valor 'default' do select
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

  .cursos h1:after {
    content: "";
    display: block;
    width: 60px;
    height: 0;
    left: 63px;
    top: 221px;
    border: 3px solid transparent;
    margin-top: 25px;
  }

  [modalidade='online'] h1:after { 
    border-color: #bd0042;
  }

  [modalidade='presencial'] h1:after { 
    border-color: #3bae96;
  }

  [modalidade='live'] h1:after { 
    border-color: #9c64a2;
  }

  h2 {
    font-size: 2em;
    color: #898989;
  }

  p {
    margin-bottom: 20px;
  }

  select {
    background: #f1f1f1;
    padding: 14px 13px;
  }

</style>