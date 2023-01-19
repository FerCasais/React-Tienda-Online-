const API_KEY = "api_key=649b8663c34d6381caf605aeaa50ecfd";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500/";



//



let productos1 = [{id: 1, synopsis: 'asdfasdfa'}, {id: 2, synopsis: 'asdfasdf'}, {id: 3, synopsis: 'gsdsdfgsgd'}, {id: 4, synopsis: 'asdfasdfdg'}, {id: 5, synopsis: 'dfasdfas'}, {id: 6, synopsis: 'fgjfgh'}]



export const getFetchDOS = () => {
    return new Promise ((resolve, reject) => {

    setTimeout(() => {
        resolve(productos1)
    }, 1000)

    console.log(productos1)
    

})
   

}