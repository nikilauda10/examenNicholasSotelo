const inputU = document.getElementById("inputU");
const setContent= document.getElementById("setContent");
const btnBuscar = document.getElementById("btnBuscar");


const recibirPoke = async() =>{
if(response === ""){
            setContent.innerHTML=("<div class`alert alert-warning`>Ingrese algo</div>")
        }

    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+inputU.value);
        
        if(!response.ok){
            console.log("Warning");
            return
        };
        const datos = await response.json();
        console.log(datos);

         datos.sprites.forEach(element => {
        const divU = document.createElement("div");
        divU.classList.add("col-md-3");
        divU.innerHTML=`<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${element.font_default}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> `

setContent.appendChild(divU);
    });
    } catch{
        console.log("ERROR")
    }

   
    
};



btnBuscar.addEventListener("click",recibirPoke);