import { createStore } from 'vuex'
//import axios from 'axios'


export default createStore({

  state: {
    
    loading: true

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
        const data = JSON.parse(jsonString); // converte a string tratada para JSON
        console.log(data);

        context.commit('isLoaded');

      } catch (error) {
        console.error(error);
      }
    
    }

  },

  modules: {
  }

})
