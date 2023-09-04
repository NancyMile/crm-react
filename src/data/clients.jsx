export async function getClients() {
    //const url = import.meta.env.VITE_API-URL

    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()
    //console.log(result)
    return result
}