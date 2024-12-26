import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {

  const [Login, setLogin] = useState(true);
  const [SignUp, setSignup] = useState(false);

  
  const displayLogin = () => {
    setLogin(true);
    setSignup(false);
    setCurrentForm(<LoginForm displaySignup={displaySignup} />);
  };

  const displaySignup = () => {
    setSignup(true);
    setLogin(false);
    setCurrentForm(<SignupForm />);
  };

  const [currentForm, setCurrentForm] = useState(<LoginForm displaySignup={displaySignup} />);

  return (
    <div className="formwrapper min-h-screen w-full flex flex-col items-center justify-center p-3 relative">
      <div className="toggle-btn absolute self-end top-2 right-2 bg-white py-1 px-3 rounded-[40px] flex flex-row gap-5 items-center justify-between">
        <button
          className={`px-5 rounded-[20px] py-2 ${Login ? 'bg-blue-950 text-white' : 'bg-white'}`}
          onClick={displayLogin}
        >
          Log in
        </button>

        <button
          className={`px-5 rounded-[20px] py-2 ${SignUp ? 'bg-blue-950 text-white' : 'bg-white'}`}
          onClick={displaySignup}
        >
          Sign Up
        </button>
      </div>

      <div className="formholder flex flex-row gap-10 py-3 px-0 items-center">
        {currentForm}
      </div>
    </div>
  );
};

export default App;
