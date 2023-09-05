export async function getClients() {
    //const url = import.meta.env.VITE_API-URL

    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()
    //console.log(result)
    return result
}

export async function addClient(data) {
    //console.log(data)
    try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        })
        await response.json()

    } catch (error) {
        console.log(error)
    }
}