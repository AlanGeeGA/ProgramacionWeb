<template>
  <button @click="accionDisminuir()">Disminuir</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'BotonDisminuir',
    methods: {
        ...mapActions(['accionDisminuir'])
    }
}
</script>

<style>

</style>