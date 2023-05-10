<template>

  <fgv-loader v-if="isLoading"></fgv-loader>

  <div class="home" v-else>
    
    <section class="mt-20 mb-20">

      <div class="container mx-auto">

        <h1>Cursos de Curta e Média FGV</h1>

        <div class="txt-intro grid grid-cols-2 gap-40 mt-20 mb-40">
            
            <div>
                <p>Em todo o mundo, empresas, governos e pessoas investem vultuosas somas de recursos financeiros em desenvolvimento gerencial como forma de assegurar vantagens competitivas e acompanhar as mudanças no ambiente de negócios, que estão cada vez mais aceleradas. Os gaps de produtividade encontrados nas empresas brasileiras e a falta de conhecimentos práticos e direcionados de acordo com a necessidade de cada profissional acabam por gerar déficits consideráveis na produtividade das empresas.</p>
            </div>
    
            <div>
                <p>É diante desse cenário que se posicionam os programas de curta e média da FGV. Os cursos são destinados para pessoas em cargos de liderança ou que almejam chegar a essas posições, ou ainda, profissionais de diferentes áreas dos setores público, privado e terceiro setor que desejam ampliar as competências de gestão. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum turpis, sollicitudin vel volutpat in, vestibulum eget ligula. Mauris sagittis porta mauris, vitae pretium lectus varius nec. Donec elementum.</p>
            </div>        
    
        </div>

      </div>

    </section>

    <section class="blue-section flex justify-center items-center mt-20">

      <div class="container mx-auto">
        
        <h2 class="mt-20">Conheça os tipos de cursos</h2>

        <div class="grid grid-cols-3 gap-20 p-20 mt-20 text-center">
              
            <div class="flex justify-center items-center flex-col">
                <div class="icons">
                </div>
                <h3>curta</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
    
            <div class="flex justify-center items-center flex-col">
              <div class="icons">
              </div>
              <h3>média</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> 
            
            <div class="flex justify-center items-center flex-col">
              <div class="icons">
              </div>
              <h3>gratuito</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> 
    
        </div>

        <hr>

        <h2 class="mt-20">Conheça as modalidades de cursoss</h2>

        <div class="grid grid-cols-3 gap-20 p-20 mt-20 text-center">
              
            <div class="flex justify-center items-center flex-col">
                <div class="icons">
                </div>
                <h3>online</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
    
            <div class="flex justify-center items-center flex-col">
              <div class="icons">
              </div>
              <h3>presencial</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> 
            
            <div class="flex justify-center items-center flex-col">
              <div class="icons">
              </div>
              <h3>live</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            isLoading() {
                return this.$store.getters.getLoadingData
            }
        }

    }


</script>

<style>

  .txt-intro p {
      font-size: 18px;
      text-align: justify;
      line-height: 30px;
  }

  .icons {
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    height: 110px;
    width: 110px;
    background-color: #00d6e7;
    margin-bottom: 20px;
  }

</style>



