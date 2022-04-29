/*preguntas variadas */
const respuesta1 = [
  new Respuesta("Flor de loto.", false),
  new Respuesta("Girasoles.", true),
  new Respuesta("Margaritas", false),
  new Respuesta("Jirasol.", false),
];

const respuesta2 = [
  new Respuesta("Spiderman.", false),
  new Respuesta("Dardervil..", false),
  new Respuesta("Batman. .", true),
  new Respuesta("Superman.", false),
];

const respuesta3 = [
  new Respuesta(
    "Simón José Antonio de Trinidad Bolívar Palacios Ponte y Blanco",
    false
  ),
  new Respuesta("Simón José Antonio de la Santísima Trinidad Bolívar", false),
  new Respuesta(
    "Simón José Antonio de la Santísima Trinidad Ponte y Blanco",
    false
  ),
  new Respuesta(
    "Simón José Antonio de la Santísima Trinidad Bolívar Palacios Ponte y Blanco",
    true
  ),
];

const respuesta4 = [
  new Respuesta("1789", false),
  new Respuesta("1790", true),
  new Respuesta("1781", false),
  new Respuesta("1781", false),
];

const respuesta5 = [
  new Respuesta("Tejido", false),
  new Respuesta("Partícula", false),
  new Respuesta("atomo", false),
  new Respuesta("Célula", true),
];

const respuesta6 = [
  new Respuesta("Segregación", false),
  new Respuesta("Mitosis", true),
  new Respuesta("simbiotica", false),
  new Respuesta("Meiosis", false),
];

const respuesta7 = [
  new Respuesta("Gol de campo.", false),
  new Respuesta("Safety.", false),
  new Respuesta("El touchdown.", true),
  new Respuesta("Conversión(TRY).", false),
];

const respuesta8 = [
  new Respuesta("Uruguay.", true),
  new Respuesta("Argentina.", false),
  new Respuesta("Brazil.", false),
  new Respuesta("Bolivia.", false),
];

const repuesta10 = [
  new Respuesta("Esta estructura se encuentra en Roma, Francia.", false),
  new Respuesta("Esta estructura se encuentra en París, Italia.", false),
  new Respuesta("Esta estructura se encuentra en París, Francia.", true),
  new Respuesta("Esta estructura se encuentra en Francia, Paris.", false),
];

const repuesta11 = [
  new Respuesta("En el páncreas es donde se produce la insulina.", true),
  new Respuesta("En el riñon es donde se produce la insulina.", false),
  new Respuesta(
    "En el glandula pituitaria es donde se produce la insulina.",
    false
  ),
  new Respuesta("En el omoplato es donde se produce la insulina.", false),
];

const preguntasVariado = [
  new Pregunta(
    "¿Cuáles son las flores más famosas pintadas por Van Gogh?",
    respuesta1
  ),
  new Pregunta(
    "Qué personaje de cómic creó Bob Kane cuando tenía 18 años",
    respuesta2
  ),
  new Pregunta(
    "El nombre completo del libertador Simon Bolivar fue:",
    respuesta3
  ),
  new Pregunta("La guerra del Pacifico se llevo a cabo el año:", respuesta4),
  new Pregunta(
    "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
    respuesta5
  ),
  new Pregunta(
    "El proceso por el que una célula se divide para formar dos células hijas se llama:",
    respuesta6
  ),
  new Pregunta(
    "¿Cómo se llama la anotación de un tanto en fútbol americano?",
    respuesta7
  ),
  new Pregunta(
    "Qué país ganó la primera Copa Mundial de fútbol en 1930:",
    respuesta8
  ),
  new Pregunta(" ¿Dónde se encuentra la famosa Torre Eiffel?", repuesta10),
  new Pregunta(" ¿En qué lugar del cuerpo se produce la insulina?", repuesta11),
];

/* preguntas de historia de bolivia */

const respuestaH1 = [
  new Respuesta(
    "Simón José Antonio de Trinidad Bolívar Palacios Ponte y Blanco",
    false
  ),
  new Respuesta("Simón José Antonio de la Santísima Trinidad Bolívar", false),
  new Respuesta(
    "Simón José Antonio de la Santísima Trinidad Ponte y Blanco",
    false
  ),
  new Respuesta(
    "Simón José Antonio de la Santísima Trinidad Bolívar Palacios Ponte y Blanco",
    true
  ),
];

const respuestaH2 = [
  new Respuesta("1789", false),
  new Respuesta("1790", true),
  new Respuesta("1781", false),
  new Respuesta("1781", false),
];

const respuestaH3 = [
  new Respuesta("Atahualpa", false),
  new Respuesta("Huascar", false),
  new Respuesta("Tupac Katari", true),
  new Respuesta("Huayca Capac", false),
];

const respuestaH4 = [
  new Respuesta("1929-1932", false),
  new Respuesta("1928-1931", false),
  new Respuesta("1879-1891", false),
  new Respuesta("1932-1935", true),
];

const respuestaH5 = [
  new Respuesta("Natush Busch", false),
  new Respuesta("Hugo Banzer Suarez", true),
  new Respuesta("Garcia Meza", false),
  new Respuesta("General Barrientos", false),
];

const respuestaH6 = [
  new Respuesta("1823", false),
  new Respuesta("1824", false),
  new Respuesta("1825", true),
  new Respuesta("1826", false),
];

const respuestaH7 = [
  new Respuesta("Evo Morales", true),
  new Respuesta("Mariano Melgarejo", false),
  new Respuesta("Andres de Santa Cruz", false),
  new Respuesta("Victor Paz Estensoro", false),
];

const respuestaH8 = [
  new Respuesta("Menos de 10", false),
  new Respuesta("Cerca de 40", true),
  new Respuesta("Alrededor de 20", false),
  new Respuesta("Solamente 4, castellano y 3 originarios", false),
];

const respuestaH9 = [
  new Respuesta("Estado Plurinacional de Bolivia", true),
  new Respuesta("Republica Democratica de Bolivia", false),
  new Respuesta("Republica de Bolivia", false),
  new Respuesta("Estado Indigenista de Bolivia", false),
];

const respuestaH10 = [
  new Respuesta("Lilly Gabriela Montaño", false),
  new Respuesta("Eva Gonzales Lafuente", false),
  new Respuesta("Lidia Gueiler Tejada", true),
  new Respuesta("Adriana Salvatierra", false),
];

const preguntasHistoriaB = [
  new Pregunta(
    "El nombre completo del libertador Simon Bolivar fue:",
    respuestaH1
  ),
  new Pregunta("La guerra del Pacifico se llevo a cabo el año:", respuestaH2),
  new Pregunta(
    "Quien fue el ultimo emperador Inca antes de la llegada de los espanholes:",
    respuestaH3
  ),
  new Pregunta("La guerra del Chaco fue los anhos:", respuestaH4),
  new Pregunta(
    "La dictadura que mas personas mato en Bolivia fue:",
    respuestaH5
  ),
  new Pregunta("Bolivia fue fundada el año:", respuestaH6),
  new Pregunta(
    "El Presidente que mas tiempo goberno el pais de manera continua fue:",
    respuestaH7
  ),
  new Pregunta("Cuantas lenguas tiene Bolivia?", respuestaH8),
  new Pregunta(
    "Segun la Constitucion Politica del Estado el nombre oficial de Bolivia es:",
    respuestaH9
  ),
  new Pregunta(
    "Quien es la primera mujer que ha gobernado Bolivia?",
    respuestaH10
  ),
];

/* preguntas de ciencias naturale */

const respuestaCN1 = [
  new Respuesta("Tejido", false),
  new Respuesta("Partícula", false),
  new Respuesta("atomo", false),
  new Respuesta("Célula", true),
];

const respuestaCN2 = [
  new Respuesta("Segregación", false),
  new Respuesta("Mitosis", true),
  new Respuesta("simbiotica", false),
  new Respuesta("Meiosis", false),
];

const respuestaCN3 = [
  new Respuesta("En el nucleo", true),
  new Respuesta("En la membrana", false),
  new Respuesta("En el nucleolo", false),
  new Respuesta("En el citoplasma", false),
];

const respuestaCN4 = [
  new Respuesta("Por la piel", false),
  new Respuesta("Pulmones", true),
  new Respuesta("Branquias", false),
  new Respuesta("Nariz", false),
];

const respuestaCN5 = [
  new Respuesta("ADN (ácido desoxirribonucleico)", true),
  new Respuesta("Proteínas", false),
  new Respuesta("ARN (ácido ribonucleico)", false),
  new Respuesta("Acidos", false),
];

const respuestaCN6 = [
  new Respuesta("Asno ", false),
  new Respuesta("Burro", false),
  new Respuesta("Mini asno", false),
  new Respuesta("Mulo", true),
];

const respuestaCN7 = [
  new Respuesta("Verdura", false),
  new Respuesta("Hortaliza", false),
  new Respuesta("Crucifera", false),
  new Respuesta("Fruta", true),
];

const respuestaCN8 = [
  new Respuesta("Gravedad", true),
  new Respuesta("Normal", false),
  new Respuesta("Rozamiento", false),
  new Respuesta("Energia", false),
];

const respuestaCN9 = [
  new Respuesta("Creacionismo", false),
  new Respuesta("Darwinismo", true),
  new Respuesta("Lamarckismo", false),
  new Respuesta("Gradualismo", false),
];

const respuestaCN10 = [
  new Respuesta("La fotosíntesis", true),
  new Respuesta("El catabolismo", false),
  new Respuesta("El anabolismo", false),
  new Respuesta("Metastasis", false),
];

const preguntasCN = [
  new Pregunta(
    "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
    respuestaCN1
  ),
  new Pregunta(
    "El proceso por el que una célula se divide para formar dos células hijas se llama:",
    respuestaCN2
  ),
  new Pregunta(
    "La información genética en las células se localiza:",
    respuestaCN3
  ),
  new Pregunta("¿Con qué respira una ballena?", respuestaCN4),
  new Pregunta("Los cromosomas están formados por:", respuestaCN5),
  new Pregunta(
    "Al descendiente del cruce de un asno y una yegua se le conoce como:",
    respuestaCN6
  ),
  new Pregunta("Para los botánicos, el tomate es una:", respuestaCN7),
  new Pregunta(
    "La fuerza física que la tierra ejerce sobre los cuerpos hacia su centro es la:",
    respuestaCN8
  ),
  new Pregunta(
    "¿Cómo se llama la teoría que considera que todos los organismos descendemos del mismo ancestro?",
    respuestaCN9
  ),
  new Pregunta(
    "El proceso mediante el cual se generan moléculas orgánicas a partir de sustancias inorgánicas usando como fuente de energía el sol es:",
    respuestaCN10
  ),
];

/* preguntas de Deporte */

const respuestaD1 = [
  new Respuesta("Gol de campo.", false),
  new Respuesta("Safety.", false),
  new Respuesta("El touchdown.", true),
  new Respuesta("Conversión(TRY).", false),
];

const respuestaD2 = [
  new Respuesta("Uruguay.", true),
  new Respuesta("Argentina.", false),
  new Respuesta("Brazil.", false),
  new Respuesta("Bolivia.", false),
];

const respuestaD3 = [
  new Respuesta("Lewis Hamilton, piloto Ingles.", false),
  new Respuesta("Sebastián Vettel, piloto alemán.", false),
  new Respuesta("Nelson Piquet,piloto brasileño.", false),
  new Respuesta("Michael Schumacher,piloto alemán.", true),
];

const respuestaD4 = [
  new Respuesta("Halterofilia.", true),
  new Respuesta("Hockey.", false),
  new Respuesta("Atletismo.", false),
  new Respuesta("Squash.", false),
];

const respuestaD5 = [
  new Respuesta(
    "90 minutos repartidos en dos partes de 45 minutos cada una.",
    true
  ),
  new Respuesta(
    "40 minutos repartidos en dos partes de 20 minutos cada una.",
    false
  ),
  new Respuesta(
    "100 minutos repartidos en dos partes de 50 minutos cada una.",
    false
  ),
  new Respuesta(
    "90 minutos repartidos en tres partes de 45 minutos cada una.",
    false
  ),
];

const respuestaD6 = [
  new Respuesta("El 21 de mayo de 1904 en Zuiza.", false),
  new Respuesta("El 13 de julio de 1930 en Uruguay. ", true),
  new Respuesta("El 12 de octubre de 1926 en Santiago de Chile.", false),
  new Respuesta("El 27 de mayo de 1934 en Italia", false),
];

const respuestaD7 = [
  new Respuesta("Italia.", false),
  new Respuesta("España.", false),
  new Respuesta("Brasil", true),
  new Respuesta("Alemania. ", false),
];

const respuestaD8 = [
  new Respuesta("The Wolf", false),
  new Respuesta("The Foxes", true),
  new Respuesta("The King", false),
  new Respuesta("The Lion", false),
];

const respuestaD9 = [
  new Respuesta(
    "Según el reglamento dura 40 minutos repartidos en dos tiempos de 20 minutos cada uno.",
    false
  ),
  new Respuesta(
    "Según el reglamento dura 60 minutos repartidos en dos tiempos de 30 minutos cada uno.",
    false
  ),
  new Respuesta(
    "Según el reglamento dura 20 minutos repartidos en dos tiempos de 10 minutos cada uno.",
    false
  ),
  new Respuesta(
    "Según el reglamento dura 30 minutos repartidos en dos tiempos de 15 minutos cada uno.",
    true
  ),
];

const respuestaD10 = [
  new Respuesta("12", false),
  new Respuesta("11", true),
  new Respuesta("10", false),
  new Respuesta("13", false),
];

const preguntasD = [
  new Pregunta(
    "¿Cómo se llama la anotación de un tanto en fútbol americano?",
    respuestaD1
  ),
  new Pregunta(
    "Qué país ganó la primera Copa Mundial de fútbol en 1930:",
    respuestaD2
  ),
  new Pregunta(
    "¿Quién ganó cinco mundiales consecutivos de Fórmula 1?",
    respuestaD3
  ),
  new Pregunta(
    "¿Cómo se llama el deporte en el cual se levantan pesas?",
    respuestaD4
  ),
  new Pregunta("¿Cuánto dura un partido de fútbol?", respuestaD5),
  new Pregunta("¿Cuándo se celebró el primer mundial de fútbol?", respuestaD6),
  new Pregunta(
    "¿Qué selección de fútbol ha ganado más Mundiales?",
    respuestaD7
  ),
  new Pregunta("¿Cuál es el apodo del Leicester City?", respuestaD8),
  new Pregunta(
    "¿Cuánto dura la prórroga en un partido de fútbol?",
    respuestaD9
  ),
  new Pregunta(
    "¿Cuántos jugadores tiene un equipo de fútbol en el campo de juego?",
    respuestaD10
  ),
];

/* preguntas de Arte */

const respuestaA1 = [
  new Respuesta("Flor de loto.", false),
  new Respuesta("Girasoles.", true),
  new Respuesta("Margaritas", false),
  new Respuesta("Jirasol.", false),
];

const respuestaA2 = [
  new Respuesta("Spiderman.", false),
  new Respuesta("Dardervil..", false),
  new Respuesta("Batman. .", true),
  new Respuesta("Superman.", false),
];

const respuestaA3 = [
  new Respuesta("Pintura..", false),
  new Respuesta("Escultura.", false),
  new Respuesta("Danza", true),
  new Respuesta("Escultural", false),
];

const respuestaA4 = [
  new Respuesta("Las paredes..", false),
  new Respuesta("El techo.", true),
  new Respuesta("Las columnas.", false),
  new Respuesta("Piso.", false),
];

const respuestaA5 = [
  new Respuesta("Cinco", true),
  new Respuesta("Tres.", false),
  new Respuesta("Cuatro", false),
  new Respuesta("Seis", false),
];

const respuestaA6 = [
  new Respuesta("En el Louvre de París.", false),
  new Respuesta("En el Hermitage. ", false),
  new Respuesta("En el Museo de Arte Moderno de Nueva York.", true),
  new Respuesta("En el museo de Londres", false),
];

const respuestaA7 = [
  new Respuesta("Frank Gehry.", true),
  new Respuesta("Norman Foster.", false),
  new Respuesta("Frank Lloyd Wright.", false),
  new Respuesta("Frank Ferrari. ", false),
];

const respuestaA8 = [
  new Respuesta("La Sagrada Familia.", false),
  new Respuesta("La Mezquita de Córdoba.", true),
  new Respuesta("La catedral de Santiago de Compostela.", false),
  new Respuesta("La catedral de Notre Dan.", false),
];

const respuestaA9 = [
  new Respuesta("La Catedral de Milán.", false),
  new Respuesta(" La Catedral de Sevilla", false),
  new Respuesta("San Pedro de El Vaticano.", true),
  new Respuesta("La Catedra del Santisima Trinidad", false),
];

const respuestaA10 = [
  new Respuesta("Museo del Prado", true),
  new Respuesta("Museo Thyssen.", false),
  new Respuesta("Museo Nacional de Arte de Cataluña.", false),
  new Respuesta("Museo Nacional de Arte de Santa Lucia", false),
];

const preguntasA = [
  new Pregunta(
    "¿Cuáles son las flores más famosas pintadas por Van Gogh?",
    respuestaA1
  ),
  new Pregunta(
    "Qué personaje de cómic creó Bob Kane cuando tenía 18 años",
    respuestaA2
  ),
  new Pregunta("En qué arte destacó Isadora Duncan", respuestaA3),
  new Pregunta(
    "Qué parte de la capilla sixtina pintó Miguel Ángel",
    respuestaA4
  ),
  new Pregunta(
    "Cuántas mujeres aparecen en el cuadro Las señoritas de Avignon",
    respuestaA5
  ),
  new Pregunta(
    "En qué museo puedes contemplar la mayor colección de obras de Kandinsky",
    respuestaA6
  ),
  new Pregunta(
    " Quién es el arquitecto del Museo Guggenheim de Bilbao",
    respuestaA7
  ),
  new Pregunta(
    "Cuál es la única construcción religiosa en España que tiene 19 naves",
    respuestaA8
  ),
  new Pregunta("Cuál es la basílica más grande de la cristiandad", respuestaA9),
  new Pregunta("Cuál es la pinacoteca más grande de España", respuestaA10),
];

/* preguntas de Arte */

const preguntasCategorias = [
  preguntasHistoriaB,
  preguntasD,
  preguntasA,
  preguntasCN,
  preguntasVariado,
];

let respuesta0 = [];

let categorias = [
  "Historia de Bolivia",
  "Deportes",
  "Arte",
  "Ciencias Naturales",
  "Variado",
];

let correctas = 0;
let incorrectas = 0;
let numPreguntas = 1;

function contador() {
  numPreguntas += 1;
  document.getElementById("cantPreguntas").innerHTML = numPreguntas + " / 10";
  console.log(numPreguntas);
  if (numPreguntas == 11 ) {
    window.location.replace("evaluar.html");
  }
}

let cat2 = localStorage.getItem("categoria");
//console.log(cat2)
document.getElementById("cabecero").innerHTML = `<h1>${cat2}</h1>`;
console.log(localStorage.getItem("categoria"));

function mostrarValores() {
  let correctas = document.getElementById("correctas");
  let incorrectas = document.getElementById("incorrectas");
  console.log(" correctas : " + localStorage.getItem("correctas"));
  let numC = localStorage.getItem("correctas");
  let numI = localStorage.getItem("incorrectas");
  correctas.innerHTML = "correctas: " + numC;
  incorrectas.innerHTML = "incorrectas: " + numI;
  if (numC == null) {
    correctas.innerHTML = "correctas: " + 0;
  } else if (numI == null) {
    incorrectas.innerHTML = "incorrectas: " + 0;
  }
  //localStorage.clear()
}

function obtenerCat(cat) {
  localStorage.clear();
  localStorage.setItem("categoria", cat.innerText);
  //console.log(typeof cat.innerText);
}

function mostrarPregunta() {
  //console.log(cat2)
  let indice1 = 0;
  for (indice1 = 0; indice1 < categorias.length; indice1++) {
    if (categorias[indice1] == cat2) {
      console.log("el indice es " + indice1);
      break;
    }
  }

  console.log("el indice es " + indice1);
  let categoriaDePregunta = preguntasCategorias[indice1];
  console.log(categoriaDePregunta);
  let indice = Math.floor(Math.random() * (10 - 0) + 0);
  let texto = "";
  texto += `<h2>${categoriaDePregunta[indice]._pregunta}</h2>`;
  respuesta0 = categoriaDePregunta[indice]._respuestas;
  document.getElementById("preguntas").innerHTML = texto;
  let textoRespuestas = "";
  for (let respuesta of respuesta0) {
    textoRespuestas += `<li onclick="respuestaCorrecta(this)">${respuesta._respuesta}</li>`;
  }
  document.getElementById("respuestas").innerHTML = textoRespuestas;
}

let lista = document.querySelector(".prueba").getElementsByTagName("li");
//const respuesta = document.getElementById("respuestas");
let resV = "";

function respuestaCorrecta(actualRes) {
  setTimeout(contador, 1000);
  let respuestaCorrecta = "";
  //console.log(actualRes.innerHTML);
  for (let respuesta of respuesta0) {
    if (respuesta.verdad) {
      respuestaCorrecta = respuesta._respuesta;
      if (actualRes.innerHTML == respuestaCorrecta) {
        actualRes.style = "background-color : #82EC8A";
        correctas += 1;
        localStorage.setItem("correctas", String(correctas));
        //console.log('res correctas '+correctas)
        setTimeout(mostrarPregunta, 1000);
      } else {
        actualRes.style = "background-color : #F24C4C";
        incorrectas += 1;
        localStorage.setItem("incorrectas", String(incorrectas));
        //console.log('res incorrectas '+incorrectas)
        setTimeout(mostrarPregunta, 1000);
        for (let i of lista) {
          if (respuestaCorrecta == i.innerText) {
            i.style = "background-color : #82EC8A";
          }
        }
      }
    }
  }
}

//respuesta.addEventListener("click", respuestaCorrecta);
