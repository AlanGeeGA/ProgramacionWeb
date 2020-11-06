<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="30">
    <p>Mi total es {{total}}</p>
    <button @click="accionAumentar(20)">Aumentar</button>
    <BotonDisminuir />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';
import BotonDisminuir from '../components/BotonDisminuir';

export default {
  name: 'Home',
  components: {
   BotonDisminuir
  },
  data() {
    return {
      titulo: 'Proyecto con vuex'
    }
  },
  methods: {
    ...mapActions(['accionAumentar'])
  },
  computed: {
    ...mapState(['total'])
  }
}
</script>
