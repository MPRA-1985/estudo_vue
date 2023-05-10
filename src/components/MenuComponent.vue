<template>

    <div id="container-menu">

        <div id="menu" class="container mx-auto flex justify-between items-center">

            <div id="campo_busca">
                <input type="text" name="search" placeholder="Pesquisar" autocomplete="off">
            </div>

            <nav>

                <ul class="flex gap-14">

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

    #campo_busca input {
        width: 300px;
        background: hsla(0,0%,100%,.2);
        border-radius: 50px;
        padding: 5px 14px;
        transition: all .25s;
        box-shadow: none;
        outline: 2px solid transparent;
    }

    #container-menu {
        padding: 10px 30px;
        color: #fff;
        position: sticky;
        top: 0;
        background-color: #004372;
    }

    #menu {
        padding: 10px 0;
        color: #fff;
    }

    #menu li {
        font-family: Poppins;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
        color: #fff;
        text-decoration: none;
        display: block;
        transition: color .25s;
        cursor: pointer;
    }

    /* nav {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    } */

    nav ul {
        /* gap: 2rem;
        align-items: center;
        display: flex; */
        list-style: none;
    }

    nav ul li a {
        color: #fff;
        text-decoration: none;
        display: block;
    }

    .drop_itens {
        position: absolute;
        z-index: 1;
        background: #cd9934;
        border-radius: 4px;
        min-width: 110px;
        display: block;
    }

    #menu .drop_itens li:not(:last-child) {
        border-bottom: 1px solid hsla(0,0%,100%,.3);
    }

    #menu .drop_itens li a {
        outline: none;
        padding: 8px 12px;
        transition: background-color .25s;
    }

    #menu .drop_itens li a:hover {
        background-color: hsla(0,0%,100%,.3);
    }

</style>