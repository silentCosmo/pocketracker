import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { swiped } from '../../redux/pocketSlice';

function TransactionDetails(details) {
  const data = details.details;
  const dispatch = useDispatch()
  //Swipe Function
  const [dragged, setDragged] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });/*
  const [toDelete,setToDelete] = useState(false) 
  const nodeRef = useRef(null); */

  const handleDrag = (event, { deltaX }) => {
    /* console.log('onDrag', deltaX); */
    if (deltaX < -6) {
      setDragged(true);
    }
  };
  const handleDragStop = () => {
    if (dragged) {
      console.log('delete!', data.amt);
      onDelete()
    } else {
      console.log('drag_Failed');
      setPosition({ x: 0, y: 0 });
    }
    setDragged(false);
  };
  //Delete Related Functions
  const onDelete = () =>{
    console.log('called');
    console.log(dragged);
    dispatch(swiped({swipe:true}))
  }
  
  return (
    <>
    <Draggable axis='x'position={position} onDrag={handleDrag} onStop={handleDragStop}>
    <div className={`bg-slate-900 border-l-[0.3rem] w-64 p-1 mr-2 flex justify-between cursor-pointer ${data.inc?'border-emerald-500': 'border-pink-700'}`}>
        <p>22/5/2023</p>
        <p>{data.cat}</p>
        <p className={`${data.inc?"text-emerald-500":"text-pink-600"}`}>&#8377;{data.amt}</p>
    </div>
    </Draggable>
    {/* {toDelete?
    <div className='fixed flex items-center top-0 right-0 bottom-0 left-0 backdrop-filter backdrop-blur-sm bg-black bg-opacity-[0.01]'>
      <div className='m-auto p-3 max-w-md bg-black bg-opacity-5'>
        <div className='p-3 py-5  border-2 border-teal-950 bg-slate-900'>
        <p className='text-lg'>Are you sure to remove the transaction?</p>
        <div className='flex justify-around mt-5 text-slate-950'>
        <button className='px-3 p-1 bg-teal-600' onClick={handleCancel}>Cancel</button>
        <button className='px-3 p-1 bg-red-600'>Delete</button>
        </div>
      </div>
      </div>
    </div>
    :""
    } */}
    </>
  )
}

export default TransactionDetails