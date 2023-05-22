import React, { useState } from 'react'

function NewTransaction() {
  const [isInc,setIsInc] = useState(true)
  const handleTransactionType = (e)=> {
    console.log(e.target.id);
    if (e.target.id==="income"){
      setIsInc(true)
    }else{
      setIsInc(false)
    }
    console.log(isInc);
  }
  return (
    <div className='p-2 border border-slate-900 w- m-auto mt-2'>
        <p className='uppercase text-sm bg-teal-600 p-1 text-slate-900 font-medium cursor-none'>New Transaction</p>
        <div className='mt-2'>
        <form action="">
            <input type="date" name="" id="" className='focus:border-t-teal-500 border border-slate-800 bg-slate-900 outline-none text-center w-36' />
            <ul className="flex flex-row p-1 mt-2 border border-slate-800 bg-slate-900 list-none hover:border-t-teal-500">
              <li>
              <input type="radio" name="type" id="income" className='hidden peer' onChange={handleTransactionType} defaultChecked/>
              <label htmlFor="income" className='p-0.5 peer-checked:bg-teal-600 peer-checked:text-emerald-950 bg-slate-950 border border-slate-900'>&nbsp;Income&nbsp;</label>
              </li>
              <li>
                <input type="radio" name="type" id="expense" className='hidden peer' onChange={handleTransactionType}/>
                <label htmlFor="expense" className='peer-checked:bg-teal-600 peer-checked:text-pink-950 bg-slate-950 border border-slate-900'>&nbsp;Expense</label>
              </li>
            </ul>
            <select name="category" className='focus:border-t-teal-500 border border-slate-800 bg-slate-900 mt-2 w-full outline-none overflow-x-visible'>
                <option value="" disabled selected>Category</option>
                { isInc ?
                <>
                <option value="Salary">Salary</option>
                <option value="Freelance">Frelance</option>
                <option value="Investment">Investment</option>
                <option value="Gift">Gift</option>
                <option value="Unspecified">Other</option>
                </>
                :
                <>
                <option value="Rent">Rent</option>
                <option value="Fuel">Fuel</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
                <option value="Insurance">Insurance</option>
                <option value="Entertaiment">Entertaiment</option>
                <option value="Unspecified">Other</option>
                </>
                }
            </select>
            <input type="number" name="" id="" className='focus:border-b-teal-500 border border-slate-800 bg-slate-900 outline-none text-center w-36 mt-2 appearance-none' placeholder='Amount'/>
            <input type="submit" value="Create" className='bg-teal-600 text-slate-900 mt-2 w-full hover:bg-teal-500 active:bg-teal-400'/>
        </form>
        </div>
    </div>
  )
}

export default NewTransaction