import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onDelete, swiped } from '../redux/pocketSlice'

function DeleteModal() {
    const delId = useSelector((state)=>state.pocket.swiped.id)
    console.log('del:',delId);
    const dispatch = useDispatch()
    const handleCancel = () => {
        dispatch(swiped(false))
    }
    const handleDelete = () => {
        dispatch(onDelete(delId))
    }
  return (
      <div className='fixed flex items-center top-0 right-0 bottom-0 left-0 backdrop-filter backdrop-blur-sm bg-black bg-opacity-[0.01]'>
          <div className='m-auto p-3 max-w-md bg-black bg-opacity-5'>
              <div className='p-3 py-5  border-2 border-teal-950 bg-slate-900'>
                  <p className='text-lg'>Are you sure to remove the transaction?</p>
                  <div className='flex justify-around mt-5 text-slate-950'>
                      <button className='px-3 p-1 bg-teal-600 hover:bg-teal-700' onClick={handleCancel}>Cancel</button>
                      <button className='px-3 p-1 bg-red-600 hover:bg-red-700' onClick={handleDelete}>Delete</button>
                  </div>
              </div>
          </div>
        </div>
  )
}

export default DeleteModal