import React from 'react'

function TransactionDetails({inc}) {
    console.log(inc);
  return (
    <div className={`bg-slate-900 border-l-[0.3rem] ${inc?'border-emerald-500': 'border-pink-800'}`}>
        g
    </div>
  )
}

export default TransactionDetails