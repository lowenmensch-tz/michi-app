<template>
   <div class="grid-container" >
          <div class="grid-item"
             v-for="michi in favoriteCats"
            :key="michi.image.id"
            @click="addToFavorite(michi)">
              <img :src="michi.image.url" class="michi">
              
              <div class="grid-container-image">
                <div class="grid-item-image">
                  <p>Subido: {{ michi.created_at }}</p>
                </div>
                <div class="grid-item-image" >
                    <img :src="michi.image.favorite" class="favorite">
                </div>
              </div>
              
          </div>
        </div>
</template>

<script>
  import getFavoritesCats from '@/composables/getFavoritesCats';
  import  addToFavorite from '@/composables/addToFavorite';

  import { ref } from '@vue/reactivity';
  import { onMounted } from '@vue/runtime-core';

  export default {
    name: 'FavoriteCat',
    components: {
    }, 

    setup(){
      
      const favoriteCats = ref(null);

      onMounted(async () => {
        let favorites =  await getFavoritesCats();
        
        favorites.forEach(cat => {
           cat.image['favorite'] = "https://img.icons8.com/flat-round/64/000000/hearts.png";
           
           const timestamp = new Date(cat.created_at);
            cat.created_at = `${timestamp.getDate()}/${timestamp.getMonth()}/${timestamp.getFullYear()}`
        });

        console.log("Favoritos:", favorites);
        
        favoriteCats.value = favorites;
      });

      return {
        favoriteCats, 
        addToFavorite
      }
    },
}
</script>

<style>

</style>