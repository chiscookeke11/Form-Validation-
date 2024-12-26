import React from 'react'

const SignupForm = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        e.target.reset
    }


  return (
 <form onSubmit={handleLogin} className='bg-white flex flex-col px-4 py-4 min-h-[55vh] items-center text-center justify-center w-[35vw] min-w-[330px] rounded-[20px] ' >
    <h1 className='text-[#000000] text-2xl font-bold  mb-1 ' >Sign Up</h1>
    <p className='text-[grey]  text-md font-normal px-4 mb-2 ' >Start your journey on Gradient Network and shape the future of compute.</p>

    <label htmlFor="email" className='flex flex-col w-full items-start my-2 gap-2 py-2 mb-5 ' >
         <p className='text-lg fonbold' >Email</p>
        <input type="email" id='email' placeholder='Enter Email' name='email' className='w-[98%] mx-auto  px-4 py-3 outline-none border border-gray-700 rounded-[50px] bg-white required ' />
        </label>
        <div className='flex flex-col items-center w-full justify-center gap-4' >
            <button type='submit' className='w-[100%] mx-auto  px-4 py-3 outline-none border-none rounded-[50px] bg-[#000000] text-white ' >Confirm</button>
            <button type='button' className='w-[100%] mx-auto  px-4 py-3 outline-none  rounded-[50px] bg-white text-black border border-gray-700 '>Sign up with Google</button>
        </div>
   
   </form>
  )
}

export default SignupForm