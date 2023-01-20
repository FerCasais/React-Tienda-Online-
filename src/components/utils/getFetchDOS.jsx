const API_KEY = "api_key=649b8663c34d6381caf605aeaa50ecfd";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500/";



//



let productos1 = [{id: 1, titulo: "The Notebook", synopsis: 'En un hogar de retiro un hombre le lee a una mujer, que sufre de Alzheimer, la historia de dos jóvenes de distintas clases sociales que se enamoraron durante la convulsionada década del 40, y de cómo fueron separados por terceros, y por la guerra.'}, {id: 2, titulo: "El Papel de sus vidas", synopsis: 'Una actriz que se ha realizado una cirugía plástica que no ha sido un éxito, decide contratar a una doble para reemplazarla en su próximo rodaje'}, {id: 3, titulo: "El Orfanato", synopsis: 'Laura se instala con su familia en el orfanato en el que creció de niña. Su propósito es abrir una residencia para niños discapacitados, pero su hijo desaparece y sus planes se desvanecen. Varios meses después de la desaparición, Laura escucha voces de espíritus y se convence de que ellos le pueden ayudar a encontrar a su hijo.'}, {id: 4, titulo: "Wonder", synopsis: 'Auggie Pullman tiene 10 años y sueña con convertirse en astronauta algún día. Nació con una grave malformación facial y tuvo que someterse a diez años de operaciones y largos periodos de recuperación en casa. Ahora Auggie debe enfrentarse a otro gran reto: asistir a clase por primera vez.'}, {id: 5, titulo: "Daredevil", synopsis: 'Matt Murdock, ciego desde niño, lucha contra la injusticia en Cocina del Infierno, Nueva York, de día como abogado y de noche como el superhéroe Daredevil. Ve todo lo que quieras.'}, {id: 6, titulo: "Diego Maradona", synopsis: 'El 5 de julio de 1984, Diego Maradona llegó a Nápoles luego de un pago récord. El futbolista más icónico del mundo y una de las ciudades más apasionadas y peligrosas de Europa conformaron una dupla ideal.'}, {id: 7, titulo: "Ronaldo", synopsis: 'Las cámaras han acompañado al futbolista portugués Christiano Ronaldo durante más de un año (desde enero de 2014, cuando ganó su segundo Balón de Oro), con acceso sin precedentes a su círculo íntimo y profesional. A través de conversaciones y archivos de vídeo inéditos, se da una visión asombrosa de su vida personal y deportiva.'}, {id: 8, titulo: "Safe", synopsis: 'Luke Wright es un luchador de segunda categoría de las artes marciales mixtas, con una vida llena de palizas, rutina y un salario que es una miseria... hasta que un día se le presenta la oportunidad de un combate amañado. A partir de ese momento, su vida se convierte en un infierno después de que la mafia rusa mate a su familia, viéndose desterrado a vagar por las calles de Nueva York como un indigente más, atormentado por la culpa de las consecuencias de su acto'}, {id: 9, titulo: "Ahora o Nunca", synopsis: 'Eva y Alex, tras años de novios, deciden casarse en el pequeño pueblo de la campiña inglesa donde se conocieron. Sin embargo, se les presenta un problema inesperado: una huelga de controladores impide que Alex y sus invitados lleguen hasta donde está Eva.'}, , {id: 10, titulo: "Sin rastro", synopsis: 'En la película Sin rastro (Gone), Jill Parrish llega un día a su casa después de trabajar un turno de noche y descubre que su hermana, Molly, ha sido secuestrada. Jill, que ya tiene experiencia en esa materia, tras haber logrado escapar de las garras de un asesino en serie que la secuestró un año antes, está convencida de que se trata del mismo individuo. La policía cree que Jill está loca, por lo que no se muestran muy dispuestos a malgastar sus recursos para ayudarla. Al temerse que Molly pueda estar muerta para la puesta de sol, Jill decide emprender por su cuenta una persecución para encontrar al asesino, sacar a la luz sus secretos y salvar a su hermana.'}]



export const getFetchDOS = () => {
    return new Promise ((resolve, reject) => {

    setTimeout(() => {
        resolve(productos1)
    }, 1000)

    console.log(productos1)
    

})
   

}