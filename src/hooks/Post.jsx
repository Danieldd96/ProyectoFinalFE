async function darDatos(objeto){
    try {
        
        const respuesta = await fetch("http://localhost:3001/users",{
           method: "POST",
           headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(objeto)
        })
        const datos = await respuesta.json()
        console.log(datos)
        console.log(`Se agregò un usuario ${listaTareas.tarea}`);
    } catch (error) {
        console.error(error);
    }
}
export default darDatos