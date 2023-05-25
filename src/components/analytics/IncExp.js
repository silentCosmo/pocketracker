import React from 'react'
import { useSelector } from 'react-redux'

function IncExp() {
  const overview = useSelector((state)=>state.pocket.overview)
  return (
    <div className='font-rubik mt-1 md:fle justify-center gap-1'>
      <div className='bg-opacity-10 border-opacity-30 pb-1 bg-slate-950 border-2 border-teal-950 text-center w-full px-8'>
        <h2 className='mt-2 font-bold'>INCOME</h2>
        <h1 className='font-extrabold tracking-widest text-teal-500'>&#8377;{overview?overview.income.toLocaleString():0}</h1>
      </div>
      <div className='bg-opacity-10 border-opacity-30 pb-1 mt-1 bg-slate-950 border-2 border-teal-950 text-center w-full px-8'>
        <h2 className='mt-2 font-bold'>EXPENSE</h2>
        <h1 className='font-extrabold tracking-widest text-pink-500'>&#8377;{overview?overview.expense.toLocaleString():0}</h1>
      </div>
    </div>
  )
}

export default IncExp