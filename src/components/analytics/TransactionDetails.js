import React from 'react'

function TransactionDetails(details) {
  const data = details.details;
    console.log(data,'data');
  return (
    <div className={`bg-slate-900 border-l-[0.3rem] w-64 p-1 mr-2 flex justify-between ${data.inc?'border-emerald-500': 'border-pink-700'}`}>
        <p>22/5/2023</p>
        <p>{data.cat}</p>
        <p className={`${data.inc?"text-emerald-500":"text-pink-600"}`}>&#8377;{data.amt}</p>
    </div>
  )
}

export default TransactionDetails