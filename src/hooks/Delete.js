async function deleteData(id) {
    let apiUrl="http://localhost:3001/users/"
    try {
        const response = await fetch(apiUrl+id,{
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
export {deleteData}