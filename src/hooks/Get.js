async function Get() {
    let apiUrl="http://localhost:3001/users"
    try {
        const response = await fetch(apiUrl)
        let listarTareas =await response.json()
        return listarTareas

    } catch (error) {
        console.log(error)
    }

};
export {Get}