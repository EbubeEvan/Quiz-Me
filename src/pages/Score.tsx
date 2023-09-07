import React from 'react'

const Score = () => {
  return (
    <main className="w-full h-screen bg-cover bg-no-repeat bg-right md:overflow-hidden" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}}>
      <div className='flex justify-center'>
        <div className='pt-10'>
          <div className='bg-red-500 h-56 w-56 mb-16 rounded-full relative left-[2rem] md:left-0'><p className='relative top-[6rem] left-[6rem]'>score</p></div>
          <button className='bg-green-500 h-16 w-72 flex justify-center pt-[1rem] md:relative md:right-[2rem] rounded-md'><p>New Quiz</p></button>
          <button className='bg-orange-700 -500 h-16 w-72 flex justify-center pt-[1rem] md:relative md:right-[2rem] rounded-md mt-8'><p>Corrections</p></button>
        </div>
      </div>
    </main>
  )
}

export default Score