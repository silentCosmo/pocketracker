import React from 'react' 
import { useSelector } from 'react-redux'

function Balance() {
  const overview = useSelector((state) => state.pocket.overview)
  const balance = overview?.income - overview?.expense
  return (
    <div className='font-rubik mt-2'>
        
        { balance<0?
        <div className='bg-opacity-20 border-opacity-30 bg-slate-950 border-2 border-teal-950  text-center w-full m-auto py-1 px-24 mt-1'>
            <h2 className='mt-2 font-bold'>&nbsp;&nbsp;CREDIT&nbsp;&nbsp;</h2>
            <h1 className='font-extrabold text-red-500 tracking-widest'>&#8377;{balance.toLocaleString()}</h1>
        </div>
        :
        <div className='bg-opacity-20 border-opacity-30 bg-slate-950 border-2 border-teal-950 text-center w-full m-auto py-1 px-24'>
            <h2 className='mt-2 font-bold'>BALANCE</h2>
            <h1 className='font-extrabold text-emerald-500 tracking-widest'>&#8377;{balance>0?balance.toLocaleString():0}</h1>
        </div>
        }
    </div>
  )
}

export default Balance