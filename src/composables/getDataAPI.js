import api_url from "./api_url";

const { API_KEY } = api_url;

const getDataAPI = async (url) => {

    try {
        const response = await fetch(url, {
            method: 'GET', 
            headers: {
                'x-api-key': API_KEY,
                'Content-type': 'application/json',
            }, 
        });
        const status = response.status;
        if (status !== 200) throw new Error(`Error de petición HTTP: ${status}`);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.log(error.message);
    }

}

export default getDataAPI;