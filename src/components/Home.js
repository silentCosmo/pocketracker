import React from 'react'
import Balance from './analytics/Balance'
import IncExp from './analytics/IncExp'
import NewTransition from './NewTransaction'
import History from './History'

function Home() {
  return (
    <>
        <h1 className='font-bold text-3xl mt-4 text-teal-400 font-unbounded'>PocKeTracker</h1>
          <div className='p-2 md:flex gap-10 border border-slate-900 m-auto mt-4 text-slate-400 w-min'>
            <div className='border border-slate-800 md:p-2 mb-2 md:pt-2'>
            <Balance/>
            <IncExp/>
            </div>
            <div className='border border-slate-800 md:p-2 md:w-[25vw]'>
            <NewTransition/>
            </div>
            <div className='border border-slate-800 md:p-2 mt-4 md:mt-0'>
            <History/>
            </div>
        </div>
    </>
  )
}

export default Home