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

export async function getClient(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await response.json()
    //console.log(result)
    return result
}

export async function editClient(id, data) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
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

export async function deleteClient(id) {
    //console.log('deleting')
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await response.json()
    } catch (error) {
        console.log(error)
    }
}