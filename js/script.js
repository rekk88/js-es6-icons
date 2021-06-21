
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
  
});


//stampa delle icone al caricamento della pagina 
print(coloredIcons);
//event change su select
let select = document.getElementById("categorie");
select.addEventListener("change",function(){
  let valore  = select.value;
  console.log(valore);
  
  if(valore == "all"){
    print(coloredIcons);
  }
  else{
    let filtered = coloredIcons.filter((object) => object.type == valore);
    print(filtered);

  }
 
  console.log(filtered);


});




      
function print(elemento){
  document.getElementById("contenuto").innerHTML= "";
  elemento.forEach(element => {
    const {name , prefix, type, family, color} = element;
    document.getElementById("contenuto").innerHTML += `
      <div class="box">
          <i class="${family} ${prefix}${name}" style="color : ${color}"></i>
          <div class="title">${name.toUpperCase()}</div>
      </div>
    `;
  });
  
}


console.log(coloredIcons);
