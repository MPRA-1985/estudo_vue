import { createStore } from 'vuex'


export default createStore({

  state: {
    
    loading: true,
    listaCursos: null

  },

  getters: {

    getLoadingData (state) {
      return state.loading;
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
        this.state.listaCursos = JSON.parse(jsonString); // converte a string tratada para JSON

        console.log(this.state.listaCursos);

        context.dispatch("listaCursosPorArea"); 

      } catch (error) {
        console.error(error);
      }
    
    },

    listaCursosPorArea (context) {

      // continuar daqui para organizar os cursos por área

      var arrCursosPorArea = [];

      for ( var curso in this.state.listaCursos.result.cursos ) {

        if ( !arrCursosPorArea.includes(this.state.listaCursos.result.cursos[curso].area) ) {

          arrCursosPorArea.push( this.state.listaCursos.result.cursos[curso].area = {} );

        }

      }

      console.log( arrCursosPorArea )

      context.commit('isLoaded');

    }

  },

  modules: {
  }

})
