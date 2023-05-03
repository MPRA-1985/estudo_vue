<template>
  
  <div id="container-menu">

    <div id="menu" class="container mx-auto">

      <div id="campo_busca">
        <span>Pesquisar</span>
      </div>
  
      <nav>
  
          <ul>
  
            <li>Programa</li>
  
            <li class="dropdown" @mouseover="showMenu = true" @mouseleave="showMenu = false">
              Curta
              <ul class="drop_itens" v-show="showMenu">
                <li>
                  <router-link :to="{ name: 'curso', params: { tipo: 'curta', modalidade: 'online' }}">Online</router-link>
                </li>
                <!-- <li><router-link to="/curtaPresencial">Presencial</router-link></li>
                <li><router-link to="/curtaLive">Live</router-link></li> -->
              </ul>
            </li>
  
            <li class="dropdown" @mouseover="showMenu2 = true" @mouseleave="showMenu2 = false">
              Média
              <ul class="drop_itens" v-show="showMenu2">
                <li>Online</li>
                <li>Presencial</li>
                <li>Live</li>
              </ul>
            </li>
  
            <li>Gratuitos</li>
  
            <li>Home</li>
  
          </ul>
            
      </nav>
      
    </div>

  </div>
  

  <router-view></router-view>

</template>

<script>

  export default {

    data() {

      return {
        showMenu: false,
        showMenu2: false
      };

    }

  }

</script>

<style>

  #container-menu {
    background-color: #004372;
  }

  #menu {
    padding: 0 30px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  nav {
      display: flex;
      flex-direction: row-reverse;
  }

  nav ul {
    gap: 2rem;
    align-items: center;
    display: flex;
    list-style: none;
    color: #fff;
  }

  .drop_itens {
    position: absolute;
    z-index: 1;
    background: #cd9934;
    border-radius: 4px;
    min-width: 110px;
    display: block;
  }

  body {
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    color: #444;
    margin: 0;
    line-height: inherit;
  }

</style>
