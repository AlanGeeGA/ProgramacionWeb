<template>
<div class="container">
    <TituloPrincipal texto="Películas" />
    <!-- <button @click="consumirPeliculas()">Buscar películas</button> -->
    <Tarjeta 
        v-for="p in peliculas"
        :key="p.id"
        :titulo="p.title"
        :id="p.id"
    />
</div>
  
</template>

<script>
import TituloPrincipal from '../components/TituloPrincipal'
import Tarjeta from '../components/Tarjeta.vue';
export default {
    name: 'Peliculas',
    components: {
        TituloPrincipal,
        Tarjeta
    },
    data () {
        return {
            peliculas: []
        }
    },
    methods: {
        async consumirPeliculas() {
            try {
                const res = await fetch('https://ghibliapi.herokuapp.com/films');
                const data = await res.json();
                console.log(data);
                this.peliculas = data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.consumirPeliculas();
    }

}
</script>

<style>

</style>