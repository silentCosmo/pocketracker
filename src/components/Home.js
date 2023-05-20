import React from 'react'
import Balance from './Balance'

function Home() {
  return (
    <div>
        <h1 className='font-bold text-3xl mt-4 text-teal-400 font-unbounded'>PocKetly</h1>
        <div className='w-[80vw] h-[85vh]  border rounded-md border-slate-900 m-auto mt-4'>
            <Balance/>
        </div>
    </div>
  )
}

export default Home