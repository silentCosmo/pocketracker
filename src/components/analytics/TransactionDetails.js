import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { swiped, toSwipe } from '../../redux/pocketSlice';

function TransactionDetails(details) {
  const data = details.details;
  const dispatch = useDispatch()

  //Swipe Function
  const [dragged, setDragged] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });/*
  const [toDrag,setToDrag] = useState(false)
  const [toDelete,setToDelete] = useState(false) 
  const nodeRef = useRef(null); */
  
  const toDrag = useSelector((state)=>state.pocket.value.payload)
  /* console.log(dragOn);
  useEffect(()=>{console.log('eff'); setToDrag(dragOn)},[dragOn]) */
  
  const handleClick = ()=>{
    dispatch(toSwipe(true))
    console.log('e',toDrag)
    console.log('Clicked!')
  }
  const handleUnClick = ()=>{
    dispatch(toSwipe(false))
    console.log('e',toDrag)
    console.log('Leave')
  }

  //Swipe
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
    {
    toDrag?
    <Draggable axis='x'position={position} onDrag={handleDrag} onStop={handleDragStop}>
    <div className={`bg-slate- border-l-[0.3rem] w-64 p-1 mr-2 flex justify-between cursor-pointer ${toDrag?'bg-slate-900':'bg-slate-950'} ${data.inc?'border-emerald-500': 'border-pink-700'}`} onMouseLeave={handleUnClick}>
        <p>22/5/2023</p>
        <p>{data.cat}</p>
        <p className={`${data.inc?"text-emerald-500":"text-pink-600"}`}>&#8377;{data.amt}</p>
    </div>
    </Draggable>
    :
      < div className={`bg-slate-950 border-l-[0.3rem] w-64 p-1 mr-2 flex justify-between cursor-pointer ${data.inc ? 'border-emerald-500' : 'border-pink-700'}`}  onClick={handleClick}>
      <p>22/5/2023</p>
      <p>{data.cat}</p>
      <p className={`${data.inc ? "text-emerald-500" : "text-pink-600"}`}>&#8377;{data.amt}</p>
    </div >
    }
    </>
  )
}

export default TransactionDetails