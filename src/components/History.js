import React, { useEffect, useState } from 'react'
import TransactionDetails from './analytics/TransactionDetails'
import { useSelector } from 'react-redux';
import DeleteModal from './DeleteModal';

function History() {
  const swiped = useSelector((state) => state.pocket.swiped ? state.pocket.swiped:false)
  const historyTemp = useSelector((state)=> state.pocket.history)
  const history = [...historyTemp].reverse()
  //Display History
  const [hisEmpty,setHisEmpty] = useState(false)
  useEffect(() => { if(historyTemp.length===0){setHisEmpty(true)}else{setHisEmpty(false)}}, [historyTemp])
 
  return (
    <div className='px-2 mb-4'>
        <p className='pb-1 bg-slate-900 text-teal-600 uppercase'>History</p>
        <div className="flex flex-col pt-1.5 p-1 pr-0 gap-2 md:h-[75vh] h-[80vh] border border-slate-800 overflow-y-scroll overflow-x-hidden">
        {
          hisEmpty ?
          
          <div className="flex items-center h-full">
          <p className='w-72 opacity-60'>No transactions yet</p>
          </div>
          :
          history.map((his)=>{
            return <TransactionDetails details={
              { id:his.id,
                date:his.date,
                type:his.type,
                category:his.category,
                amount:his.amount}
              }/>
          })
        }
        </div>
        <p className='opacity-30 mt-4'>&lt; Swipe left to delete</p>
        {swiped?<DeleteModal/>:""}
        
        
    </div>
  )
}

export default History