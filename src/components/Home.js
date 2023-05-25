import React from 'react'
import Balance from './analytics/Balance'
import IncExp from './analytics/IncExp'
import NewTransition from './NewTransaction'
import History from './History'

function Home() {
  return (
    <>
        <h1 className='font-bold text-3xl mt-4 text-teal-500 font-unbounded'>PocKeTracker</h1>
          <div className='p-2 md:flex gap-10 borde rounded-md border-slate-900 m-auto mt-4 text-slate-400 w-min'>
          <div className='borde border-opacity-50 bg-slate-900 md:p-2 md:pt-2 md:min-w-[25vw]  bg-slate-00 bg-opacity-20'>
            <Balance/>
            <IncExp/>
            </div>
            <div className='borde border-opacity-50 bg-slate-900 md:p-2 md:w-[25vw] bg-slate-00 bg-opacity-20'>
            <NewTransition/>
            </div>
            <div className='borde border-opacity-50 bg-slate-900 md:p-2 mt-4 md:mt-0 md:w-[25vw] bg-slate-00 bg-opacity-20'>
            <History/>
            </div>
        </div>
    </>
  )
}

export default Home