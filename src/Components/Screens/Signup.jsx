import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/register', { email, password });
      console.log('Registration successful:', response.data);
      // Optionally, you can redirect the user to a different page after successful registration.
    } catch (error) {
      console.error('Registration error:', error);
      // Handle the error (e.g., display an error message to the user).
    }
  };

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen space-y-44">
      <div className="flex justify-center items-center">
        <h1 className="font-poppins text-6xl font-semibold">"Welcome to our community! 🎉</h1>
      </div>
      <div className="flex justify-center items-center space-x-44"> 
        <h1 className="font-poppins text-6xl font-bold">Tr1ton Shield Edition</h1>
        
        <div className="flex flex-col p-4 space-y-5 border-l-2 border-black">
          <label className="ml-5 font-poppins text-xl">Email</label>
          <input 
          className="ml-5 font-poppins text-lg w-[25rem] h-[3rem] p-2 border-2 border-black rounded-lg" type="email" placeholder="Enter your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
          />
          <label className="ml-5 font-poppins text-xl">Password</label>
          <input  
          className="ml-5 font-poppins text-lg w-[25rem] h-[3rem] p-2 border-2 border-black rounded-lg" type="password" placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <label className="ml-5 font-poppins text-xl">Confirm Password</label>
          <input  className="ml-5 font-poppins text-lg w-[25rem] h-[3rem] p-2 border-2 border-black rounded-lg" type="password" placeholder="Confirm your Password" />
          <button onClick={registerUser} className="ml-5 font-poppins font-bold text-white text-lg w-[25rem] h-[3rem] p-2 rounded-lg hover:bg-blue-600 bg-blue-400">Register</button>
          <Link to="/" className="ml-5 font-poppins text-xl hover:text-blue-600 hover:underline">
            Already have account?
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;