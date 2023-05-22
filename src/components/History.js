import React from 'react'
import TransactionDetails from './analytics/TransactionDetails'

function History() {
  return (
    <div className='border border-slate-800 px-2 flex flex-col gap-2'>
        <p>History</p>
        <TransactionDetails inc={true} />
        <TransactionDetails inc={false} />
        {/* <p className='mt-20 opacity-60'>No Transactions!</p> */}
    </div>
  )
}

export default History