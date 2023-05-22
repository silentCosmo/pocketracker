import React from 'react'

function IncExp() {
  return (
    <div className='font-rubik mt-1 flex flex-row justify-center gap-1'>
      <div className='border border-slate-900 text-center w-min px-8'>
        <h2 className='mt-2 font-bold'>INCOME</h2>
        <h1 className='font-extrabold tracking-widest text-teal-500'>&#8377;700</h1>
      </div>
      <div className='border border-slate-900 text-center w-min px-8'>
        <h2 className='mt-2 font-bold'>EXPENSE</h2>
        <h1 className='font-extrabold tracking-widest text-pink-500'>&#8377;260</h1>
      </div>
    </div>
  )
}

export default IncExp