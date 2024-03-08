import React from 'react'

const index = () => {
  return (
    <div className='flex items-center justify-center min-w-full min-h-screen'>
      <form className='flex flex-col md:w-1/5'>
        <div className='text-3xl font-bold text-center'>
          <span className='text-blue'>welcome!</span>
        </div>
        <input
          placeholder='email'
          className='p-3 mt-8 rounded-md border-2 border-grey focus:outline-none focus:border-blue'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          className='p-3 mt-4 rounded-md border-2 border-grey focus:outline-none focus:border-blue'
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='p-3 mt-6 rounded-md bg-blue font-bold text-white'
          type='submit'
          // onClick={submitHandler}
        >
          login
        </button>
      </form>
    </div>
  )
}

export default index