import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='min-h-screen mt-20 '>
    <div className='flex flex-col items-center  lg:flex-row  lg:items-center p-3 max-w-3xl mx-auto border-2 border-black rounded-md gap-16'>
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
    <form className='flex flex-col gap-4'>
      <div>
       <Label value='Your username'/>
       <TextInput type='text' placeholder='username' id='username'/>
      </div>
      <div>
       <Label value='Your email'/>
       <TextInput type='text' placeholder='email' id='email'/>
      </div>
      <div>
       <Label value='Your password'/>
       <TextInput type='text' placeholder='password' id='password'/>
      </div>
      <Button  gradientDuoTone='purpleToPink' type='submit'>Signup</Button>
    </form>
    <div className='flex gap-2 text-sm  mt-5'>
  <span>Have an account ?</span>
  <Link to="/signin" className='text-blue-500'> Signin </Link>
  </div>
    </div>
   
  
    </div>
      </div>
  )
}

export default Signup