<template>
   <div class="grid-container" >
          <div class="grid-item"
             v-for="michi in randonCats"
            :key="michi.id"
            @click="addToFavorite(michi.id)">
              <img :src="michi.url" class="michi">
              
              <div class="grid-container-image">
                <div class="grid-item-image">
                  <p>{{ michi.height }}px - {{ michi.width }}px - {{ michi.favorite }}</p>
                </div>
                <div class="grid-item-image" v-if="michi.favorite">
                    <img :src="michi.favorite" class="favorite">
                </div>
              </div>
              
          </div>
        </div>
</template>

<script>
import getRandomCats from '@/composables/getRandomCats';
  import getFavoritesCats from '@/composables/getFavoritesCats';
  import addToFavorite from '@/composables/addToFavorite';

  import { ref } from '@vue/reactivity';
  import { onMounted } from '@vue/runtime-core';

  export default {
    name: 'HomeView',
    components: {
    }, 

    setup(){
      
      const randonCats = ref(null);

      onMounted(async () => {
        let random = await getRandomCats();
        let favorites =  await getFavoritesCats();

        random.forEach(cat => {
           cat['favorite'] = cat.url in favorites ? "https://img.icons8.com/flat-round/64/000000/hearts.png" : "";
        });
        
        randonCats.value = random;
      });

      return {
        randonCats, 
        addToFavorite
      }
    },
}
</script>

<style>

</style>