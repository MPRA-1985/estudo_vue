import { createStore } from 'vuex'


export default createStore({

  state: {
    
    loading: true,
    listaCursos: null,
    listaCursosPorArea: null,
    listaAreas: null
  },

  getters: {

    getLoadingData (state) {
      return state.loading;
    },

    getCursosPorArea (state) {
      return state.listaCursosPorArea;
    },

    getListaAreas (state) {
      return state.listaAreas;
    }

  },

  mutations: {

    isLoaded( state ) {
      state.loading = false;
    }

  },
  

  actions: {

    async loadDataCurtaMedia(context) {
      
      const url = 'https://script.google.com/macros/s/AKfycbzyipxhi79qImVaTcIriX69MzkdPDOPkxl2Xpm_qV0CtvKqgY9KXFf5NRCj1Ud8RVEJqg/exec?action=getalldata&callback=responseJson';

      try {
        const response = await fetch(url);
        const jsonp = await response.text(); // Converte o JSONP para string
        const jsonString = jsonp.substring( jsonp.indexOf( '(') + 1, jsonp.lastIndexOf(')' ) ); // usa o método "substring" para remover o preenchimento JSONP da string
        let listaCursos = JSON.parse(jsonString); // converte a string tratada para JSON

        this.state.listaCursos = listaCursos.result.cursos;

        console.log(this.state.listaCursos);

        context.dispatch("listaCursosPorArea"); 

      } catch (error) {
        console.error(error);
      }
    
    },

    listaCursosPorArea (context) {

      const dados = this.state.listaCursos;
      
      const resultado = [];
      
      // Percorre cada chave do objeto original
      for ( const chave in dados ) {

        const curso = dados[chave];
        const area = curso.area;
      
        // Verifica se já existe um objeto para a área atual no resultado
        const areaExistente = resultado.find(objeto => Object.keys(objeto)[0] === area);
      
        // Cria um novo objeto para o curso atual
        const novoCurso = { [chave]: curso };
      
        // Se já existe um objeto para a área, adiciona o novo curso a ele
        if (areaExistente) {
          areaExistente[area].push(novoCurso);
        } else {
          // Caso contrário, cria um novo objeto para a área e adiciona o curso
          resultado.push({ [area]: [novoCurso] });
        }

      }
      
      this.state.listaCursosPorArea = resultado;
      console.log(this.state.listaCursosPorArea);

      context.dispatch("listaAreas"); 

    },

    listaAreas (context) {
    
      const dados = this.state.listaCursosPorArea;

      // Percorre o array contendo os cursos filtrados por área... 
      this.state.listaAreas = dados.map( 
        objeto => Object.keys(objeto)[0] // ...e retorna a primeira chave de cada objeto
      );

      console.log(this.state.listaAreas);
      
      context.commit('isLoaded');
      
    },

    listaCursosDeUmaArea (context, area) {

      const dados = this.state.listaCursosPorArea;

      let cursosAreaSelecionada = dados.filter( curso => area in curso );
      console.log( cursosAreaSelecionada );

      //let teste = [];
      
      for ( var i in cursosAreaSelecionada ) {

        console.log( cursosAreaSelecionada[i][area]  );

      } 

      //console.log( teste );

    }


  },

  modules: {
  }

})
