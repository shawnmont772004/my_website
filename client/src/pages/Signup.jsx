import React from 'react'

function signup() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center shadow-md font-space-grotesk ">
    <div className="p-8 rounded-2xl shadow-lg w-96 sm:w-96 mt-12 mb-12 bg-customYellow ">
      <h2 className="text-2xl font-semibold mb-4 text-center">sign up</h2>
      <form >
        <div className="mb-4 text-black">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500  font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500   font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="User name"
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500   font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500  font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500   font-semibold bg-white placeholder-grey"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Phone no."
            className="w-full p-2 border-2 border-black  rounded-md focus:outline-none focus:border-gray-500 font-semibold bg-white placeholder-grey"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black font-semibold text-white p-3 rounded-md hover:bg-gray-600 focus:outline-none">
          Sign up
        </button>
      </form>
    </div>
  </div>
  </>
  )
}

export default signup