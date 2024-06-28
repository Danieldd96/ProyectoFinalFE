async function Get() {
    try {
        const response = await fetch("http://localhost:3001/users")
        let listarTareas =await response.json()
        return listarTareas

    } catch (error) {
        console.log(error)
    }

};
export default Get