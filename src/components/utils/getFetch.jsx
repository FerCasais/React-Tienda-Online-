const API_KEY = "api_key=649b8663c34d6381caf605aeaa50ecfd";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500/";



//

let productos = [{id: 1, titulo: "los bañeros 4", genero: "romanticas", precio: 20, img: "https://www.mundoprimaria.com/wp-content/uploads/2020/11/20-mejores-peliculas-familiares.jpg"}, {id: 2, titulo: "los bañeros 5", genero: "comedias", precio: 20, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peliculas-buenas-netflix-ruido-1673601704.jpg?resize=768:*"}, {id: 3, titulo: "el arbol caido", genero: "drama", precio: 15, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peliculas-buenas-netflix-los-crimenes-de-la-academia-1673255228.jpg?resize=768:*"}, {id: 4, titulo: "el almacro", genero: "drama", precio: 7, img: "https://www.mundoprimaria.com/wp-content/uploads/2020/11/20-mejores-peliculas-familiares.jpg" }, {id: 5, titulo: "alma mia", genero: "series", precio: 17, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peliculas-buenas-netflix-los-crimenes-de-la-academia-1673255228.jpg?resize=768:*"}, {id: 6, titulo: "los payasos", genero: "documentales", precio: 12, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peliculas-buenas-netflix-los-crimenes-de-la-academia-1673255228.jpg?resize=768:*"}, {id: 7, titulo: "yo", genero: "documentales", precio: 22, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peliculas-buenas-netflix-los-crimenes-de-la-academia-1673255228.jpg?resize=768:*"}, {id: 8, titulo: "Aviones", genero: "suspenso", precio: 23, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peliculas-buenas-netflix-los-crimenes-de-la-academia-1673255228.jpg?resize=768:*"}, {id: 9, titulo: "la conga", genero: "comedias", precio: 11, img: "https://www.mundoprimaria.com/wp-content/uploads/2020/11/20-mejores-peliculas-familiares.jpg"}, {id: 10, titulo: "el oso verde", genero: "suspenso", precio: 12, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peliculas-buenas-netflix-los-crimenes-de-la-academia-1673255228.jpg?resize=768:*"}];




export const getFetch = () => {
    return new Promise ((resolve, reject) => {

    setTimeout(() => {
        resolve(productos)
    }, 2000)

    console.log(productos)
    

})
   

}
  
// async function loadData() {

//     const response = await fetch(API_URL);
//     const data = await response.json();

 // console.log(data.results)

    

//     data.results.forEach((element) => {
//         console.log(element.title);

     

//         let li = document.createElement("h5");
//         li.innerText = `Titulo: ${element.title}`;
//        document.body.appendChild(li);

//         let release = document.createElement('h6')
//         release.innerText = `Fecha de lanzamiento: ${element.release_date}`
//         ;
//         document.body.append(release);

//         const seeMovies = document.createElement("img");
//         seeMovies.src = IMG_URL + element.backdrop_path;
//        document.body. append(seeMovies);

   
//     })
    
// }loadData()  