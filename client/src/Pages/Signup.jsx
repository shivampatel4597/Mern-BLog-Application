import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'


const Signup = () => {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
    console.log(formData)
  }
  const formSubmission = async (e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("please fill the input fields")
    }
try{
  setLoading(true);
  setErrorMessage(null)
  const res = await fetch('api/auth/signup', {
    method:"POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(formData),
  })

  const data = await res.json()
  console.log(data)
  if(data.success  === false){
    return setErrorMessage(data.message)
  }
  setLoading(false);
  if(res.ok){
navigate('/signin')
  }
}catch(error){
setErrorMessage(error.message)
setLoading(false);
}
  }
  
  return (
    <div className='h-full  mt-20 mb-10'>
    <div className='flex flex-col items-center  lg:flex-row  lg:items-center p-10 bg-blue-100 max-w-3xl mx-auto  border-black rounded-md gap-16'>
      {/* left side */}
  <div >
  <Link to='/' className=' text-2xl font-bold text-black'>
          <span className=' text-3xl px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>SHIVAM'S</span>blog
        </Link>
        <p className='text-md font-md mt-5 '>
  Create your first blog and showcase your skills.
        </p>
  </div>
    {/* right side */}
    <div className='flex flex-col'>
    <form className='flex flex-col gap-4' onSubmit={formSubmission}>
      <div>
       <Label value='Your username'/>
       <TextInput type='text' placeholder='username' id='username' onChange={handleChange}/>
      </div>
      <div>
       <Label value='Your email'/>
       <TextInput type='email' placeholder='email' id='email' onChange={handleChange}/>
      </div>
      <div>
       <Label value='Your password'/>
       <TextInput type='password' placeholder='password' id='password' onChange={handleChange}/>
      </div>
      <Button  gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
        
        {loading ?(<>  <Spinner size='sm'/>  <span className='pl-3'>Loading...</span>
          </> ) : ("Sign up")}
      </Button>
    </form>
    <div className='flex gap-2 text-sm  mt-5'>
  <span>Have an account ?</span>
  <Link to="/signin" className='text-blue-500'> Signin </Link>
  </div>
  {errorMessage && (
 <Alert className='mt-5 bg-red-200 text-red-500 px-3 py-2 text-center' >{errorMessage}</Alert>  
  )}
    </div>
   
  
    </div>
      </div>
  )
}

export default Signup