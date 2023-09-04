import {useNavigate, Form, useActionData} from 'react-router-dom'
import ClientForm from '../components/ClientForm'
import Error from '../components/Error'

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  //console.log(data)

  //validate data
  const errors = []
  if (Object.values(data).includes('')) {
    errors.push('All the fields are compulsory')
  }
  //console.log(errors)

  //return errors
  if (Object.keys(errors).length) {
    return errors
  }

  return 1
}

const NewClient = () => {

  const navigate = useNavigate()
  const errors = useActionData()

  console.log(errors)
  return (
    <>
       <h1 className="font-black text-4xl text-blue-900">New Client</h1>
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
        >
          <ClientForm />
          <input className="bg-blue-800 p-3 w-full uppercase text-white font-bold text-lg" type="submit" value="Save Client"/>
        </Form>
      </div>
    </>
  )
}

export default NewClient