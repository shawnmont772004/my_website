import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';


function signup() {

  const [details,setDetails]=useState({
    fname:"",
    lname:"",
    username:"",
    password:"",
    email:"",
    phone:""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange=(e)=>{
    setDetails((prev)=>{
      return{
        ...prev,
      [e.target.name]:e.target.value
      }     
    });
  }
  //console.log(details);
  const navigate = useNavigate();

  const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(details);

    try{
      setLoading(true);

      const res=await fetch('/api/auth/signup',
      {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        }, 
        body:JSON.stringify(details),
      }
      );

      const data = await res.json();
      console.log(data);

      if (data.success === false)
      {
        setLoading(false);
        setError(data.message);
        return;
      }
      navigate('/signin');
      setLoading(false);
      setError(null);

    }
  catch(error)
    {
      setLoading(false);
      setError(error.message);
    }

  }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center shadow-md font-space-grotesk ">
    <div className="p-16 rounded-2xl shadow-lg w-96 sm:w-96 mt-12 mb-12 bg-customYellow ">
      <h2 className="text-2xl font-semibold mb-4 text-center">sign up</h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-4 text-black">
          <input
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={handleChange}
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500  font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            name="lname"
            onChange={handleChange}
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500   font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="User name"
            name="username"
            onChange={handleChange}
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500   font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500  font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500   font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone no."
            name="phone"
            onChange={handleChange}
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500 font-semibold bg-white placeholder-grey"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black font-semibold text-white p-3 rounded-md hover:bg-gray-600 focus:outline-none"disabled={loading}>
          {loading ? "loading...":"sign up"}
        </button>
        <div className="text-black flex justify-center gap-32 mt-2 text-sm">
          <p>Have an account?</p>
          <Link to="/signin">
            <p className="underline">sign in?</p>
          </Link>
        </div>
        <div>{error && <p className='text-red-500 p-2 mt-5'>{error}</p>}</div>
      </form>
    </div>
  </div>
  </>
  )
}

export default signup