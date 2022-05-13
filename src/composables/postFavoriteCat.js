import postDataAPI from './postDataAPI';

import api_url from "./api_url";

const { API_URL_FAVOURITES, API_KEY } = api_url;


const postFavoriteCat = async (imageID) => {
    
    const data = {
        "image_id": imageID,
        "sub_id": API_KEY,
    };

    const response = await postDataAPI(API_URL_FAVOURITES, data)

    if(response.message === "SUCCESS"){
        return true;
    } else {
        return false;
    }
}


export default postFavoriteCat;