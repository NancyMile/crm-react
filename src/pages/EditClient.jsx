import { editClient } from "../data/clients"

export async function loader({ params }) {
    //console.log(params)
    const client = await editClient(params.clientId)

    if (Object.values(client).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No results, Client not found'
        })
    }
    //console.log(client)
    return client
}

const EditClient = () => {
  return (
    <div>EditClient</div>
  )
}

export default EditClient