<template>
  <div>
    <div class="container">
      <h1 class="text-light">About Us</h1>
      <p class="text-light"> Esta página está en construcción </p>
     <button type="button" class="btn purple" @click="goBack">Volver a Home</button>
      <br /><br />
    </div>
  </div>
</template>

<script>
export default {
 methods: {
  goBack() {
    this.$router.push("/");
  },
 }
}
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