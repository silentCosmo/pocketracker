import React from 'react'
import TransactionDetails from './analytics/TransactionDetails'

function History() {
  return (
    <div className='border border-slate-800 px-2 mb-4'>
        <p className='pb-1'>History</p>
        <div className="flex flex-col gap-2 md:h-[75vh] h-[80vh] overflow-y-scroll">
        <TransactionDetails details={{inc:true,cat:'salary',amt:'7367'}} />
        <TransactionDetails details={{ inc:false,cat:'Entertaiment',amt:'456'}} />
        <TransactionDetails details={{ inc:false,cat:'shopping',amt:'556'}} />
        <TransactionDetails details={{ inc:true,cat:'gift',amt:'38'}} />
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
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} />
        </div>
        {/* <p className='mt-20 opacity-60'>No Transactions!</p> */}
    </div>
  )
}

export default History