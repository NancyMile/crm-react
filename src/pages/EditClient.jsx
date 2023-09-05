import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom"
import { getClient, editClient } from "../data/clients"
import ClientForm from "../components/ClientForm"
import Error from "../components/Error"

export async function loader({ params }) {
    //console.log(params)
    const client = await getClient(params.clientId)

    if (Object.values(client).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No results, Client not found'
        })
    }
    //console.log(client)
    return client
}

export async function action({ request,params}) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const email = formData.get('email')
    //console.log(data)

    //validate data
    const errors = []
    if (Object.values(data).includes('')) {
      errors.push('All the fields are compulsory')
    }
    //console.log(errors)

    //validate email
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!regex.test(email)) {
      errors.push('Invalid email')
    }

    //return errors
    if (Object.keys(errors).length) {
      return errors
    }

    await editClient(params.clientId,data)
    return redirect('/')
}

const EditClient = () => {
    const navigate = useNavigate()
    const client = useLoaderData()
    const errors = useActionData()
    //console.log(client)
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
            <p className="mt-3 ">Please fill the information</p>
            <div className='flex justify-end'>
                <button className='bg-blue-800 px-3 py-1 font-bold uppercase text-white'
                onClick={() => navigate(-1)}
                >
                Back
                </button>
            </div>
            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
                {errors?.length && errors.map((error, i) => (
                <Error  key={i}>{error}</Error>
                ))}

                <Form
                method='post'
                noValidate
                >
                <ClientForm
                    client={client}
                />
                <input className="bg-blue-800 p-3 w-full uppercase text-white font-bold text-lg" type="submit" value="Save Changes"/>
                </Form>
            </div>
        </>
    )
}

export default EditClient