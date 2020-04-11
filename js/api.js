



const fetchData1 = async (URL) => { //Antes de declarar la función
    try {
        const response1 = await fetch(URL, {})
        console.log(response1)
        const data1 = await response1.json()
        console.log(data1)
        return data1
    } catch (error1) {
        console.error(error1)
    }
}
//https://thesimpsonsquoteapi.glitch.me/
//const API = 'https://randomuser.me/api/'
const API1 = 'https://dog.ceo/api/breeds/image/random'

const mostrarPerros = (perros) => {
  console.log(perros)
    const contenido = document.getElementById('contenedor1')
    console.log(perros)
   contenido.innerHTML = `
    <div class="row">
    <div class="col s6 m8">
      <div class="card">
        <div class="card-image">
          <img src="${perros}" style="align-content: center;">                  
        </div>
      </div>
    </div>
  </div>
  `


    
}

const funcionInicial1 = async () => {
    let datos = await fetchData1(API1)
    console.log(datos.message)
    mostrarPerros( datos.message )
    
}



funcionInicial1()