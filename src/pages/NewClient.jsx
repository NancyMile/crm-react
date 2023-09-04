import {useNavigate} from 'react-router-dom'
import Form from '../components/Form'

const NewClient = () => {

  const navigate = useNavigate()

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
        <form>
          <Form />
          <input className="bg-blue-800 p-3 w-full uppercase text-white font-bold text-lg" type="submit" value="Save Client"/>
        </form>
      </div>
    </>
  )
}

export default NewClient