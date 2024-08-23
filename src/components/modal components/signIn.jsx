import React from "react";

function SignIn({ hasId, toggleHasId }) {
  return (
    <div className="container mx-auto p-12 flex border-black dark:border-[#ffffff] bg-white dark:bg-gray-200 border-[2px] justify-center items-center">
      <div className=" p-8  dark:text-white ">
        <h1 className="text-center text-2xlfont-bold mb-4">KAIZEN CART</h1>
        <p className="text-center mb-8">Sign in with your Kaizen account</p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="rounded-md border border-gray-600 text-black py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="rounded-md border border-gray-600 text-black py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="text-center">
            <button
              className="text-blue-500 hover:underline"
              onClick={toggleHasId}
            >
              Don't have an account? Create one
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
