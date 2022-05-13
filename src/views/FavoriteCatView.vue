<template>
  <div class="about">
    <section id="favorite-michis">
      <h2>Gatitos Favoritos</h2>
      <FavoriteCat />

    </section>
  </div>
</template>

<script>
// @ is an alias to /src

  import FavoriteCat from '@/components/FavoriteCat.vue';
  
  export default {
    name: 'FavoriteCatView',
    components: {
      FavoriteCat,
    }, 

    setup(){
      
      return {
      }
    },
}
</script>