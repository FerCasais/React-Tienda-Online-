const API_KEY = "api_key=649b8663c34d6381caf605aeaa50ecfd";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500/";



//

let productos = [{id: 1, titulo: "The Notebook", genero: "romanticas", precio: 20, img: "https://i.pinimg.com/564x/9d/15/84/9d15844e964cacbcf87780471bed7ae0.jpg"}, {id: 2, titulo: "El Papel de sus vidas", genero: "comedias", precio: 20, img: "https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/08/papel-de-sus.jpg?w=1112&ssl=1"}, {id: 3, titulo: "El Orfanato", genero: "drama", precio: 15, img: "https://cdn.peoople.app/image/recommendation/1311582/1311582_260620223827_opt_520.jpg"}, {id: 4, titulo: "Wonder", genero: "drama", precio: 7, img: "https://cdn.peoople.app/image/recommendation/00090741-2450-4511-addc-36504aa05b0b/00090741-2450-4511-addc-36504aa05b0b_190121093006_opt.jpg" }, {id: 5, titulo: "Daredevil", genero: "series", precio: 17, img: "https://www.sopitas.com/wp-content/uploads/2015/03/karen-poster.jpg"}, {id: 6, titulo: "Diego Maradona", genero: "documentales", precio: 12, img: "https://i.pinimg.com/564x/ff/80/6f/ff806fca6857d74ceaa2f2fae0644a7c.jpg"}, {id: 7, titulo: "Ronaldo", genero: "documentales", precio: 22, img: "https://www.cineycine.com/archivos/2015/09/ronaldo-el-documental-poster.jpg"}, {id: 8, titulo: "Safe", genero: "suspenso", precio: 23, img: "https://www.elseptimoarte.net/carteles/341/safe_12870.jpg"}, {id: 9, titulo: "Ahora o Nunca", genero: "comedias", precio: 11, img: "http://www.estrenoscinema.es/wp-content/uploads/2015/04/ahora_nunca.jpg"}, {id: 10, titulo: "Sin rastro", genero: "suspenso", precio: 12, img: "https://www.elseptimoarte.net/carteles/341/sin_rastro_12871.jpg"}];




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