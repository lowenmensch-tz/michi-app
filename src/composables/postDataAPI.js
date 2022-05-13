
import api_url from "./api_url";

const { API_KEY } = api_url;

async function postDataAPI(url, data){
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON 
}

export default postDataAPI;