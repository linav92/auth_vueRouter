<template>
  <div>
    <div class="container">
      <h1 class="text-light fw-bold ">Bienvenido a Galaxy</h1>
      <h2 class="text-light mb-4">Tu App de astronomía</h2>
      <p class="text-light"> Esta página está en construcción </p>
      <div>
        <button type="button" class="btn purple" @click="about">About</button>
         <button type="button" class="btn purple" @click="signOut">Cerrar Sesión</button>
      </div>
  </div>
  </div>
</template>}

<script>
import { logout } from "../firebase/firebase.js";
export default {
  methods: {
    signOut() {
      logout();
    },

    about() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
.purple {
  background-color: #a976c3;
  color: #ffffff;
}
.btn{

  margin: 8px;
}
</style>