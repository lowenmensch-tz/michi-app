import getDataAPI from "./getDataAPI";
import api_url from "./api_url";

const { API_URL_RANDOM } = api_url;

const getRandomCat = async () => {

    const data = await getDataAPI(API_URL_RANDOM);

    return data;
}

export default getRandomCat;