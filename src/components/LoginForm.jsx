import React, { useState } from 'react';

const LoginForm = ({ displaySignup }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const emailDetail = formData.get("email");
    const PasswordDetail = formData.get("password");

    if (PasswordDetail.length <= 7) {
      setErrorMessage("Incorrect password");
    } else {
      setErrorMessage("");
      alert("Logged In");
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleLogin} className='bg-white flex flex-col px-4 py-4 min-h-[55vh] max-h-[1000px] items-center text-center justify-center w-[35vw] min-w-[330px] rounded-[20px]'>
      <h1 className='text-[#000000] text-2xl font-bold mb-1'>Log In</h1>
      <p className='text-[grey] text-md font-normal px-4 mb-2'>Welcome back! Log in to stay updated with all your nodes and rewards.</p>

      <label htmlFor="email" className='flex flex-col w-full items-start my-1 gap-2 py-2'>
        <p className='text-lg font-bold'>Email</p>
        <input type="email" id='email' placeholder='Enter Email' name='email' className='w-[98%] mx-auto px-4 py-3 outline-none border border-gray-700 rounded-[50px] bg-white' required />
      </label>

      <label htmlFor="password" className='flex flex-col w-full items-start my-1 gap-2 py-2 mb-3'>
        <p className='text-lg font-bold'>Password</p>
        <input type="password" id='password' placeholder='Enter Password' name='password' className='w-[98%] mx-auto px-4 py-3 outline-none border border-gray-700 rounded-[50px] bg-white' required />
        <p className='text-red-400 font-bold ' >{errorMessage}</p>
      </label>

      <a href="#" className='text-gray-600 self-end hover:text-black'>Forgot Password</a>

      <div className='flex flex-col items-center w-full justify-center gap-4 mt-2'>
        <button className='w-[100%] mx-auto px-4 py-3 outline-none border-none rounded-[50px] bg-[#000000] text-white'>
          Log in
        </button>
        <button type='button' className='w-[100%] mx-auto px-4 py-3 outline-none rounded-[50px] bg-white text-black border border-gray-700'>
          Sign up with Google
        </button>
      </div>

      <span className='my-1'>
        Don't have an account? <a href="#" onClick={displaySignup} className='text-gray-500 hover:text-black'>Sign up</a>
      </span>
    </form>
  );
};

export default LoginForm;
