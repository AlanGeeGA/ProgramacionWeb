<template>
<div>
    <a href="/peliculas">Regresar</a>
    <h1>Detalle</h1>
    <div>{{$route.params.id}}</div>
    <h2>{{pelicula.title}}</h2>
    <h5>Descripción</h5>
    <p>{{pelicula.description}}</p>
</div>
</template>

<script>
export default {
    name: 'DetallePelicula',
    data() {
        return {
            pelicula: {}
        }
    },
    methods:{
        async consumirPelicula(){
            try {
                const res = await fetch(`https://ghibliapi.herokuapp.com/films/${this.$route.params.id}`);
                const data = await res.json();
                this.pelicula = data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.consumirPelicula();
    }

}
</script>

<style>

</style>