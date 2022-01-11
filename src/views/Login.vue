<template>
  <div>
    <h1 class="text-light">Login</h1>
    <div class="container">
      <p class="text-light">Crear cuenta</p>
      <input type="email" class="form-control" placeholder="Usuario" v-model="crear.usuario" />
      <input
        type="password"
        placeholder="Contraseña"
        class="form-control"
        v-model="crear.contraseña"
      />
      <button type="button" class="btn purple" @click="registrar">Registrar</button>
      <p class="text-light pt-3">{{ msg }}</p>
    </div>
    <div class="container">
      <p class="text-light">Ingresar</p>
      <input type="email" class="form-control" placeholder="Usuario" v-model="ingresar.usuario" />
      <input
        type="password"
        placeholder="Contraseña"
        class="form-control"
        v-model="ingresar.contraseña"
      />
      <button type="button" class="btn purple" @click="loginUsuario">Ingresar</button>
       <p class="text-light pt-3">{{ msg2 }}</p>
    </div>
  </div>
</template>

<script>
import { registrarUsuario, login } from "../firebase/firebase.js";
export default {
  data() {
    return {
      msg: "",
      msg2: "",
      crear: {
        usuario: "",
        contraseña: "",
      },

      ingresar: {
        usuario: "",
        contraseña: "",
      },
    };
  },

  methods: {
    usuarioRegistrado(error) {
      switch(error){
        case "auth/invalid-email":
          this.msg = "El email no es valido";
          break;
        case "auth/email-already-in-use":
          this.msg = "El email ya esta en uso";
          break;
        case "auth/weak-password":
          this.msg = "El password es muy debil";
          break;
        case "auth/internal-error":
          this.msg = "Error desconocido";
          break;
      }
      this.crear.usuario = "";
      this.crear.contraseña = "";

      setTimeout(() => {
        this.msg = "";
      }, 3000);
    },
    registrar() {
      registrarUsuario(
        this.crear.usuario,
        this.crear.contraseña,
        this.usuarioRegistrado
      );
    },

    loginIncorrecto(error) {
      switch(error){
        case "auth/invalid-email":
          this.msg2 = "El email es incorrecto";
          break;
        case "auth/wrong-password":
          this.msg = "La contraseña es incorrecta";
          break;
       
      }
        setTimeout(() => {
        this.msg2 = "";
      }, 3000)
      
    },

    loginUsuario() {
      login(
        this.ingresar.usuario,
        this.ingresar.contraseña,
        this.loginIncorrecto
      );
    },
  },
};
</script>

<style scoped>
.container {
  background-color: rgba(116, 74, 155, 0.089);
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 3rem auto;
}

input {
  margin-bottom: 1rem;
  padding: 0.25rem;
}
.purple {
  background-color: #a976c3;
  color: #ffffff;
}
</style>