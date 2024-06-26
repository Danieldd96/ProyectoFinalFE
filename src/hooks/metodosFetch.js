async function darDatos(){
    try {
        let listaTareas={
            tarea:tarea,
            estado:false
        }
        const respuesta = await fetch("http://localhost:3001/users",{
           method: "POST",
           headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(listaTareas)
        })
        const datos = await respuesta.json()
        console.log(datos)
        console.log(`Se agregò un usuario ${listaTareas.tarea}`);
    } catch (error) {
        console.error(error);
    }
}

async function Get() {
    try {
        const response = await fetch("http://localhost:3001/users")
        let listarTareas =await response.json()
        return listarTareas

    } catch (error) {
        console.log(error)
    }

};
async function actualizarTarea(element) {///En este metodo cambiaremos el estado de la tarea actualizando la api
    try {
        element.estado=!element.estado
        console.log(element)
        const response = await fetch (`http://localhost:3001/users${element.id}`,{
            method:"PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(element)
        })
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}
async function deleteData(id) {
    try {
        const response = await fetch(`http://localhost:3001/users${id}`,{
            method:"DELETE",
            headers: {
                "Content-type": "application/json;",
            }
        })
       const Datos = await response.json()
       console.log(Datos)
       console.log(`Se elimino`);
   } catch (error) {
       console.error(error);
       return alert("Error")
   }
}
export default {darDatos,Get,actualizarTarea,deleteData}
