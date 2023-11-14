import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className=' lg:col-span-2 my-4'>
                <h1>Meed advice on how to improve your flow?</h1>
                <p>Sign Up to join our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input
                    type="email" 
                    placeholder="email"
                    className='p-3 flex w-full rounded-md text-black'
                     />
                      <button className='bg-[#00df9a] text-white rounded-md font-meduim w-[160px] ml-4 my-6 px-6 py-1 border-none'>
                        Notify Me
                        </button>
                      <div>
                    <p className='ml-4'>We are concerned about the security of your data, Read{""}
                    <span className='text-[#00df9a] ml-1'>Privacy Policy</span>
                    </p>
                      </div>
                </div>
            </div>
            <hr className='my-8 bg-gray-700 border-1' />
        </div>
    </div>
  )
}

export default NewsLetter