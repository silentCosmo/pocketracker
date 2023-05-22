import React from 'react'

function DeleteModal() {
  return (
      <div className='fixed flex items-center top-0 right-0 bottom-0 left-0 backdrop-filter backdrop-blur-sm bg-black bg-opacity-[0.01]'>
          <div className='m-auto p-3 max-w-md bg-black bg-opacity-5'>
              <div className='p-3 py-5  border-2 border-teal-950 bg-slate-900'>
                  <p className='text-lg'>Are you sure to remove the transaction?</p>
                  <div className='flex justify-around mt-5 text-slate-950'>
                      <button className='px-3 p-1 bg-teal-600'>Cancel</button>
                      <button className='px-3 p-1 bg-red-600'>Delete</button>
                  </div>
              </div>
          </div>
        </div>
  )
}

export default DeleteModal