

async function actualizarTarea(element) {///En este metodo cambiaremos el estado de la tarea actualizando la api
    let apiUrl="http://localhost:3001/users"
    try {
        element.estado=!element.estado
        console.log(element)
        const response = await fetch (apiUrl+element.id,{
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

export {actualizarTarea}
