<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TituloPrincipal texto="Inicio"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TituloPrincipal from '../components/TituloPrincipal'

export default {
  name: 'Home',
  components: {
    TituloPrincipal
  }
}
</script>
