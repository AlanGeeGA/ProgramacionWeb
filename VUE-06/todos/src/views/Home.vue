<template>
  <div class="home">
    <h1>Agregar ToDo</h1>
    <form @submit.prevent="guardarTodo">
      <div class="form-group">
          <label for="InputNombre">Nombre</label>
          <input v-model.trim="todo.nombre" type="text" class="form-control" id="InputNombre" placeholder="Ingrese nombre">
      </div>
      <hr>
      <div>Tipos</div>
      <div class="form-check form-check-inline">
        <input v-model="todo.tipos" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Hogar">
        <label class="form-check-label" for="inlineCheckbox1">Hogar</label>
      </div>
      <div class="form-check form-check-inline">
        <input  v-model="todo.tipos" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Escuela">
        <label class="form-check-label" for="inlineCheckbox2">Escuela</label>
      </div>
      <div class="form-check form-check-inline">
        <input v-model="todo.tipos" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Oficina">
        <label class="form-check-label" for="inlineCheckbox3">Oficina</label>
      </div>
      <hr>
      <div>Prioridad</div>
      <div class="form-check form-check-inline">
        <input v-model="todo.prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Baja">
        <label class="form-check-label" for="inlineRadio1">Baja</label>
      </div>
      <div class="form-check form-check-inline">
        <input v-model="todo.prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Media">
        <label class="form-check-label" for="inlineRadio2">Media</label>
      </div>
      <div class="form-check form-check-inline">
        <input v-model="todo.prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Alta">
        <label class="form-check-label" for="inlineRadio3">Alta</label>
      </div>
      <hr>
      <div class="form-group">
          <label for="InputHoras">Horas requeridas</label>
          <input v-model.number="todo.horas" type="number" class="form-control" id="InputHoras">
      </div>
      <button type="submit" class="btn btn-success" :disabled="bloquearBoton">Guardar</button>
    </form>
    
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      todo: {
        id: '',
        nombre: '',
        tipos: [],
        prioridad: '',
        horas: 0
      }
    }
  },
  methods: {
    ...mapActions(['setTodo']),
    guardarTodo(){
      this.todo.id = nanoid(5);
      console.log(this.todo.id);
      this.setTodo(this.todo);
      this.limpiarTodo();
    },
    limpiarTodo(){
      this.todo = {
        id: '',
        nombre: '',
        tipos: [],
        prioridad: '',
        horas: 0
      }
    }
  },
  computed: {
    ...mapState(['todos']),
    bloquearBoton(){
      return this.todo.nombre.trim() === "" ? true : false
    }
  }
}
</script>
