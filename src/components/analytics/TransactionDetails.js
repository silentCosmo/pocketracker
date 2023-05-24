import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { swiped, toSwipe } from '../../redux/pocketSlice';

function TransactionDetails(details) {
  const data = details.details;
  const dispatch = useDispatch()

  //Drag States
  const [dragged, setDragged] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });/*
  const [toDrag,setToDrag] = useState(false)
  const [toDelete,setToDelete] = useState(false) 
  const nodeRef = useRef(null); */
  const toDrag = useSelector((state)=>state.pocket.toswipe)

  //Fix Scroll Problem
  useEffect(() => {
    const handleTouchEnd = () => {
      // Function to be called when the touch ends
      dispatch(toSwipe(false))
      console.log('Touch ended');
    };

    // Add event listener for touchend
    document.addEventListener('touchend', handleTouchEnd);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('touchend', handleTouchEnd);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Click Functions
  const handleClick = ()=>{
    dispatch(toSwipe({toDrag:true}))
    console.log('Clicked!',toDrag)
  }
  const handleUnClick = ()=>{
    dispatch(toSwipe(false))
    console.log('unclicdrag',toDrag)
    console.log('Leave')
  }

  //Swipe Functions
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
      dispatch(toSwipe(false))
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
        <Draggable axis='x' position={position} onDrag={handleDrag} onStop={handleDragStop}>
        <div className={`bg-opacity- border-l-[0.3rem] w-64 p-1 mr-2 flex justify-between cursor-pointer ${toDrag ? 'bg-slate-900' : 'bg-slate-950'} ${data.inc ? 'border-emerald-500' : 'border-pink-700'}`} onMouseLeave={handleUnClick}  onTouchEnd={handleUnClick} >
        <p>22/5/2023</p>
        <p>{data.category}</p>
        <p className={`${data.inc?"text-emerald-500":"text-pink-600"}`}>&#8377;{data.amount}</p>
    </div>
    </Draggable>
    :
      < div className={`bg-slate-950 border-l-[0.3rem] w-64 p-1 mr-2 flex justify-between cursor-pointer ${data.inc ? 'border-emerald-500' : 'border-pink-700'}`}  onClick={handleClick}>
      <p>{data.date}</p>
      <p>{data.category}</p>
      <p className={`${data.inc ? "text-emerald-500" : "text-pink-600"}`}>&#8377;{data.amount}</p>
    </div >
    }
    </>
  )
}

export default TransactionDetails