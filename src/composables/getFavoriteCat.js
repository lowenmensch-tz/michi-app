import getDataAPI from "./getDataAPI";
import api_url from "./api_url";

const { API_URL_FAVOURITES } = api_url;

const getFavouriteCat = async (id) => {

    const data = await getDataAPI(`${API_URL_FAVOURITES}/${id}`);

    return data;
}

export default getFavouriteCat;