console.log('1. Bienvenido a peticiones HTTP')



const fetchData = async (URL) => { //Antes de declarar la función
    try {
        const response = await fetch(URL, {})
        console.log(response)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

const API = 'https://randomuser.me/api/'

const mostrarPersonas = (personas) => {
    const contenido = document.getElementById('contenedor')
    personas.map( (persona) => {
        contenido.innerHTML = contenido.innerHTML + `
    <div class="row ">
    <div class="col s6 m10">
      <div class="card">
        <div class="card-image">
          <img  src="${persona.picture.large} ">                 
        </div>
        <div class="card-content">
        <p class="card-text"> <p> Nombre: ${persona.name.first}</p> <p> Apellido: ${persona.name.last}</p> <p> Genero: ${persona.gender}</p> 
                  <p class="card-text">Telefono: ${persona.phone}</p>
                  <p class="card-text">Email: ${persona.email} </p>
        </div>
      </div>
    </div>
  </div>
  `
} )
}

const funcionInicial = async () => {
    let datos = await fetchData(API)
    mostrarPersonas( datos.results )
}



funcionInicial()