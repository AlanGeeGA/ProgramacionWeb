<template>
  <div class="alert alert-primary" role="alert">
      <router-link :to="`/peliculas/${id}`">
        {{titulo}}
       </router-link>
 </div>
</template>

<script>
export default {
    name: 'Tarjeta',
    props: {
        titulo: String,
        id: String
    }

}
</script>

<style>

</style>