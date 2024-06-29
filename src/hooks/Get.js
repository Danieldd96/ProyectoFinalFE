async function Get(apiUrl) {
    
    try {
        const response = await fetch(apiUrl)
        let listarTareas =await response.json()
        return listarTareas

    } catch (error) {
        console.log(error)
    }

};
export {Get}