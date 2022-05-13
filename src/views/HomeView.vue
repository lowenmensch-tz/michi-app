<template>
  <div class="home">
    <section id="random-michis">
        <h2>Gatitos Aleatorios</h2>
        <RandomCat />

    </section>
  </div>
</template>

<script>
// @ is an alias to /src

  import RandomCat from '@/components/RandomCat.vue';
  
  export default {
    name: 'HomeView',
    components: {
      RandomCat,
    }, 

    setup(){
      
      return {
      }
    },
}
</script>

<style>

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #F2F2F2;
}

.grid-container {
  display: grid;
  width: 65%;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 0.3fr;
  grid-gap: 1rem;
}

.grid-item {
  padding: 5px;
  text-align: center;  
  background-color: #D9D9D9;
  border-radius: 1px;
}

.grid-item:hover {
  background: #595959;
  cursor: pointer;
}

.grid-item:hover p {
  color: #F2F2F2;
}

.grid-container-image {
  display: grid;
  grid-template-columns: 2fr 0.3fr;
  }

.michi {
  width: 25vw;
  height: 20vh;
}

.favorite {
  width: 20px;
  height: 20px;
}
</style>
