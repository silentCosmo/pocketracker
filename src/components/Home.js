import React from 'react'
import Balance from './analytics/Balance'
import IncExp from './analytics/IncExp'
import NewTransition from './NewTransaction'
import History from './History'

function Home() {
  return (
    <div>
        <h1 className='font-bold text-3xl mt-4 text-teal-400 font-unbounded'>PocKetly</h1>
          <div className='w-max p-2 h-[85vh] md:flex gap-10 border rounded-md border-slate-900 m-auto mt-4 text-slate-400 '>
            <div className='border border-slate-800 md:p-2 md:mt-2'>
            <Balance/>
            <IncExp/>
            </div>
            <div className='border border-slate-800 md:p-2 md:w-[25vw]'>
            <NewTransition/>
            </div>
            <div className='border border-slate-800 md:p-2 md:mt-2'>
            <History/>
            </div>
        </div>
    </div>
  )
}

export default Home