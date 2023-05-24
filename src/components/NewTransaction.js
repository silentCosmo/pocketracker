import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../redux/pocketSlice'

function NewTransaction() {
  const dispatch = useDispatch()
  const [isInc,setIsInc] = useState(true)
  const handleTransactionType = (e)=> {
    updateForm(e)
    if (e.target.id==="income"){
      setIsInc(true)
    }else{
      setIsInc(false)
    }
    console.log(isInc);
  }
  console.log(Date.now());
  //Form Values
  const [formValues,setFormValues] = useState({type:'income'})
  const updateForm = (e) => {
    console.log(e.target.name,e.target.value);
    const input = e.target.name
    const value = e.target.name==='amount'? parseInt(e.target.value) : e.target.value 
    setFormValues({...formValues,[input]:value})
  }
    const newId = useSelector((state)=>state.pocket.newId)
    console.log('idGen',newId);
  //Submit Functions
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('Sumit_captured');
    console.log('data: ',formValues);

    const formData = {...formValues}
    dispatch(history(formData))

  }
  return (
    <div className='p-2 border border-slate-900 w- m-auto mt-2'>
        <p className='uppercase text-sm bg-teal-600 p-1 text-slate-900 font-medium cursor-none'>New Transaction</p>
        <div className='mt-2'>
        <form onSubmit={handleSubmit} >
            <ul className="flex flex-row gap-1 p-1 mt-2 justify-center border border-slate-800 bg-slate-900 list-none hover:border-t-teal-500">
              <li className='flex w-full'>
              <input type="radio" name="type" id='income' value="income" className='hidden peer' onChange={handleTransactionType} defaultChecked/>
              <label htmlFor="income" className='py-0.5 w-full block peer-checked:bg-teal-950 peer-checked:text-teal-300 peer-checked:border-2 peer-checked:border-teal-600 bg-slate-950 border border-slate-900'>&nbsp;Income&nbsp;</label>
              </li>
            <li className='flex w-full'>
                <input type="radio" name="type" id='expense' value="expense" className='hidden peer' onChange={handleTransactionType}/>
                <label htmlFor="expense" className='py-0.5 w-full block peer-checked:bg-pink-950 peer-checked:text-pink-300 peer-checked:border-2 peer-checked:border-pink-800 bg-slate-950 border border-slate-900'>&nbsp;Expense&nbsp;</label>
              </li>
            </ul>
            <input type="date" onChange={updateForm} name="date" className='mt-2 p-0.5 pl-4 focus:border-t-teal-500 border border-slate-800 bg-slate-900 outline-none text-center w-full' required />
            <select name="category" onChange={updateForm} className='p-1 pl-4 text-center  focus:border-t-teal-500 border border-slate-800 bg-slate-900 mt-2 w-full outline-none overflow-x-visible' required>
                <option value="" disabled selected>Category</option>
                { isInc ?
                <>
                <option value="Gift">Gift</option>
                <option value="Salary">Salary</option>
                <option value="Freelance">Frelance</option>
                <option value="Investment">Investment</option>
                <option value="Unspecified">Other</option>
                </>
                :
                <>
                <option value="Rent">Rent</option>
                <option value="Fuel">Fuel</option>
                <option value="Dept">Debt</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Medicine">Medicine</option>
                <option value="Insurance">Insurance</option>
                <option value="Education">Education</option>
                <option value="Health Care">Healthcare</option>
                <option value="Suscriptions">Suscriptions</option>
                <option value="Entertaiment">Entertaiment</option>
                <option value="Unspecified">Other</option>
                </>
                }
            </select>
            <input type="number" onChange={updateForm} name="amount" className='p-0.5 focus:border-b-teal-500 border border-slate-800 bg-slate-900 outline-none text-center w-full mt-2 appearance-none' placeholder='Amount' required/>
            <input type="submit" value="Create" className='p-0.5 bg-teal-600 text-slate-900 mt-2 w-full hover:bg-teal-500 active:bg-teal-400'/>
        </form>
        </div>
    </div>
  )
}

export default NewTransaction