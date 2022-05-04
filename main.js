const API_URL ="https://api.thecatapi.com/v1"
const API_KEY = "e275acc1-63d1-44d2-ab18-5aa244399187";
const API_URL_RANDOM = `${API_URL}/images/search?limit=2`;
const API_URL_FAVOURITES = `${API_URL}/favourites`;

async function getDataAPI(url) {

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


//POST FC
async function postFavouriteCat(url, data, apiKey){
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON 
}


//DELETE FC
async function deleteFavouriteCat(url, apiKey){
    
    const response = await fetch(url, {
        method: 'DELETE', 
        headers: {
            'x-api-key': apiKey,
            'Content-type': 'application/json',
        }, 
        });
    return response.json(); // parses JSON
}


//GET FC
async function getFavouritesCats(){
    const data = await getDataAPI(API_URL_FAVOURITES);

    data.forEach( element => {
        const url = element.image.url;
        const favouriteID = element.id;

        createElementArticleFavouriteCat(url, favouriteID);
    });
}


//GET FC
async function getFavouriteCat(favouriteID){
    const data = await getDataAPI(API_URL_FAVOURITES + '/' + favouriteID);

    console.log(data);
    const url = data.image.url;

    createElementArticleFavouriteCat(url, favouriteID);
}


//GET RC
async function getRandomCat() {

    const data = await getDataAPI(API_URL_RANDOM);
    console.log(data);

    data.forEach(function(element, index, arr){
        const url = element.url;

        const img = document.querySelector(`img[id='img-rm-${index}']`);
        img.src = url;
        
        const button = document.querySelector(`button[id='btn-fm-${index}']`);
        button.id = `btn-fm-${index}`;
        
        addButtonRandomCat(button.id, element.id);
    });

    
}


function removeElementArticleFavouriteCat(articleID){
    const article = document.querySelector(`article[id='${articleID}']`);
    article.remove();
}


function createElementArticleFavouriteCat(url, favouriteID){
    
    const article = document.createElement("article");
    article.id = `art-fm-${favouriteID}`;
    
    const img = document.createElement("img");
    img.id = `img-fm-${favouriteID}`;
    img.width = "300";
    img.src = url;
    
    const button = document.createElement("button");
    button.id = `btn-fm-${favouriteID}`;
    button.innerText = "Remove favourite Michi"

    button.addEventListener("click", function(){
        deleteFavouriteCat(
                API_URL_FAVOURITES +  '/' + favouriteID, 
                API_KEY
            )
            .then(data => {
                        if(data.message === "SUCCESS"){
                            removeElementArticleFavouriteCat(`art-fm-${favouriteID}`);
                        } 
                        console.log(data)
                    }
                )
            .catch(err => console.log(err)) // Do something with the error
    });

    article.appendChild(img);
    article.appendChild(button);
    document.querySelector("section[id='favourites-michis']").appendChild(article);
}


async function createElementArticleRandomCat(){
        const data = await getDataAPI(API_URL_RANDOM);

        data.forEach(function(element, index, arr){
        
        const url = element.url;
        const article = document.createElement("article");
        article.id = `art-rm-${index}`;
        
        const img = document.createElement("img");
        img.id = `img-rm-${index}`;
        img.width = "300";
        img.src = url;
        
        const button = document.createElement("button");
        button.innerText = "Favourite Michi";
        button.id = `btn-fm-${index}`;
        
        article.appendChild(img);
        article.appendChild(button);
        document.querySelector("section[id='random-michis']").appendChild(article);
        
        addButtonRandomCat(button.id, element.id);

    });
}


async function addButtonRandomCat(buttonID, imageID){
    
    const button = document.querySelector(`button[id='${buttonID}']`);
    
    button.onclick = function(){
        postFavouriteCat(API_URL_FAVOURITES, {
            "image_id": imageID,
            "sub_id": API_KEY,
        }, API_KEY)
        .then(data => {
            if(data.message === "SUCCESS"){
                const favouriteID = data.id;
                getFavouriteCat(favouriteID);
            } 
        })
        .catch(err => console.log(err)) // Do something with the error

    }
}


async function uploadCatPhoto(){
    const file = document.querySelector("input[id='file-to-upload']");
    const formData = new FormData();

    console.log(formData.get("file"));
}


getFavouritesCats();
createElementArticleRandomCat();