import React, { useEffect } from 'react'
import TransactionDetails from './analytics/TransactionDetails'
import { useSelector } from 'react-redux';
import DeleteModal from './DeleteModal';

function History() {
  const swiped = useSelector((state) => state.pocket.swiped ? state.pocket.swiped:false)
  const history = useSelector((state)=> state.pocket.history)
  console.log(history);
  useEffect(() => { ; console.log(swiped, 'redux'); }, [swiped])
  return (
    <div className='px-2 mb-4'>
        <p className='pb-1 bg-slate-900 text-teal-600 uppercase'>History</p>
        <div className="flex flex-col pt-1.5 p-1 pr-0 gap-2 md:h-[75vh] h-[80vh] border border-slate-800 overflow-y-scroll overflow-x-hidden">
        <TransactionDetails details={{ inc:true,cat:'salary',amt:'7367'}} />

        {
          history.map((his)=>{
            return <TransactionDetails details={{inc:false, category:his.category, amount:his.amount}}/>
          })
        }

        {/* <TransactionDetails details={{ inc:false,cat:'Entertaiment',amt:'456'}} />
        <TransactionDetails details={{ inc:false,cat:'shopping',amt:'556'}} />
        <TransactionDetails details={{ inc:true,cat:'Gift',amt:'38'}} />
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
        <TransactionDetails details={{ inc:false,cat:'Health',amt:'256'}} /> */}
        </div>
        <p className='opacity-30 mt-1'>&lt; Swipe left to delete</p>
        {swiped?<DeleteModal/>:""}
        {/* <p className='mt-20 opacity-60'>No Transactions!</p> */}
        
    </div>
  )
}

export default History