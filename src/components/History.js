import React, { useState } from 'react'
import TransactionDetails from './analytics/TransactionDetails'
import DeleteModal from './analytics/DeleteModal'

function History() {
  const [del,setDel] = useState(false)
  const handleClick=()=>{setDel(true); console.log('clicked');}
  return (
    <div className='px-2 mb-4'>
        <p className='pb-1 bg-slate-900 text-teal-600 uppercase'>History</p>
        <div className="flex flex-col pt-1.5 p-1 pr-0 gap-2 md:h-[75vh] h-[80vh] border border-slate-800 overflow-y-scroll overflow-x-hidden">
        <TransactionDetails details={{inc:true,cat:'salary',amt:'7367'}} />
        <TransactionDetails details={{ inc:false,cat:'Entertaiment',amt:'456'}} />
        <TransactionDetails details={{ inc:false,cat:'shopping',amt:'556'}} />
        <TransactionDetails details={{ inc:true,cat:'gift',amt:'38'}} />
        <div onClick={handleClick} className='bg-red-500'>
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} /></div>
        
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        </div>
        <p className='opacity-30 mt-1'>&lt; Swipe left to delete</p>
        {del?<DeleteModal/>:""}
        {/* <p className='mt-20 opacity-60'>No Transactions!</p> */}
        
    </div>
  )
}

export default History