import deleteDataAPI from "./deleteDataAPI";
import api_url from "./api_url";

const { API_URL_FAVOURITES } = api_url;

const deleteFavoriteCat = async (favoriteID) => {
    const url = `${API_URL_FAVOURITES}/${favoriteID}`;

    const data = await deleteDataAPI(url);

    if(data.message === "SUCCESS"){
        return true;
    } else {
        return false;
    }
};

export default deleteFavoriteCat;