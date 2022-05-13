
import getFavouriteCat from "./getFavoriteCat";
import deleteFavoriteCat from "./deleteFavoriteCat";
import postFavoriteCat from "./postFavoriteCat";

const isFavorite = async (favoriteID) => {
    let favouriteCat = await getFavouriteCat(favoriteID); 

    if(favouriteCat){
        return true;
    } else{
        return false;
    }
};


/**
 * Primero comprobar sí es favorito
 *  - Sí lo es, quitarlo de favorito
 *  - Sino, agregarlo a favorito 
 **/
const addToFavorite = async (catObj) => {
    
    const favoriteID = catObj.id;
    const favorite = await isFavorite(favoriteID);
    
    if(favorite){
        // Quitar de favorito
        
        let favouriteCat = await getFavouriteCat(favoriteID); 
        let deleted = await deleteFavoriteCat(favouriteCat.id);

        if (deleted) {
            console.log("Eliminado de favoritos", catObj.image.id);
        } else{
            console.log("No se pudo eliminar de favoritos", catObj.image.id);
        }
    } else{
        // Agregar a favorito
        const uploaded = await postFavoriteCat(catObj);

        if (uploaded) {
            console.log("Agregado a favoritos");
        } else{
            console.log("No se pudo agregar a favoritos");
        }
    }
};


export default addToFavorite;
