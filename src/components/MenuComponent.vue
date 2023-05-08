<template>
    
    <div id="container-menu">

        <div id="menu">

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
                            <li>
                                <router-link :to="{ name: 'curso', params: { tipo: 'curta', modalidade: 'presencial' }}">Presencial</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'curso', params: { tipo: 'curta', modalidade: 'live' }}">Live</router-link>
                            </li> 
                        </ul>
                    </li>

                    <li class="dropdown" @mouseover="showMenu2 = true" @mouseleave="showMenu2 = false">
                        Média
                        <ul class="drop_itens" v-show="showMenu2">
                            <li>
                                <router-link :to="{ name: 'curso', params: { tipo: 'media', modalidade: 'online' }}">Online</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'curso', params: { tipo: 'media', modalidade: 'presencial' }}">Presencial</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'curso', params: { tipo: 'media', modalidade: 'live' }}">Live</router-link>
                            </li> 
                        </ul>
                    </li>

                    <li>Gratuitos</li>

                    <li><router-link :to="{ name: 'home'}">Home</router-link></li>

                </ul>
                    
            </nav>
        
        </div>

    </div>

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

<style scoped>

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
    }

    nav ul li a {
        color: #fff;
        text-decoration: none;
    }

    .drop_itens {
        position: absolute;
        z-index: 1;
        background: #cd9934;
        border-radius: 4px;
        min-width: 110px;
        display: block;
    }

</style>