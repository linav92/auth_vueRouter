<template>
  <div id="app">
    <div class="loader" :class="{ show: $root.loading }">
      <img src="../src/assets/gif/Blocks.gif" alt="Cuadros de carga">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
body{
  background-image: url('../src/assets/gif/galaxia.gif');
  background-repeat: no-repeat;
  background-size: cover;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background: #fff;
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
}

.loader.show {
  opacity: 1;
  visibility: visible;
}
</style>
