
//array di icons
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

// alert("ci sono");
// let html = document.getElementById("contenuto");
icons.forEach((element) => { //scrive nella pagina tutte le icons
    const {name , prefix, type, family, color} = element;
    document.getElementById("contenuto").innerHTML += `
        <div class="box">
            <i class="${family} ${prefix}${name}"></i>
            <div class="title">${name.toUpperCase()}</div>
        </div>
    `;
});
// icons.forEach((element) => {
//   element.color = "red"; 
// });
//asegno un colore per ogni tipo 
let coloredIcons = icons.map((element) => {
  let c;
  switch(element.type){
    case "user" :
      // console.log("è un utente");
      c = "purple";
      break;
    case "vegetable" : 
      c = "green";
      // console.log("è una verdura");
      break;
    case "animal" :
      c =  "orange";
      // console.log("è un animale");
      break;
    default:
      console.log("qualcosa non funziona, merda!");

  }
  return{ //pusho il colore determinato dallo switch
    ...element, //prende tutti gli elementi (in questo caso "pusha" in coloredIcons un oggetto alla volta)
    color : c,  // con questo aggiungo ad ogni oggetto questa proprietà
   };
})
console.log(coloredIcons);
// let coloredIcons = icons.map((element) => {
//   return {
//     ...element , color,
//   }
// });
// console.log(coloredIcons);
//utenti : viola
//animali : blu
//verdure : arancio

//coloro le icone per tipo


//return ...element , color 
//ritorna un nuovo elemento con aggiunta la propietà color 
