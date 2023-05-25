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
  const [delBg,setDelBg] = useState(0)
  const handleDrag = (event, { deltaX }) => {
    setDelBg(deltaX)
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
    <div className={`${delBg===0?'':'bg-red-900'}  w-72 mr-2 py-1 flex relative`}>
      <p className='relative ml-auto mr-8 text-slate-00'>Delete</p>
      <Draggable axis='x' className='absolute w-72' position={position} onDrag={handleDrag} onStop={handleDragStop}>
        <div className="z- py-3 flex absolute mt-[-1rem]">
        <div className={`bg-opacity-  absolute w-72 p-1 mr-2 flex justify-between cursor-pointer border-l-[0.3rem]  ${toDrag ? 'bg-slate-950' : 'bg-slate-950'} ${data.type === "income" ? 'border-emerald-500' : 'border-pink-700'}`} onMouseLeave={handleUnClick}  onTouchEnd={handleUnClick} >
        <p>{data.date}</p>
        <p>{data.category}</p>
        <p className={`${data.type === "income"?"text-emerald-500":"text-pink-600"}`}>&#8377;{data.amount}</p>
        </div></div>
    </Draggable>
    </div>
    :
      <div className={`bg-slate-950 border-l-[0.3rem] w-72 p-1 mr-2 flex justify-between cursor-pointer ${data.type === "income" ? 'border-emerald-500' : 'border-pink-700'}`}  onClick={handleClick}>
      <p>{data.date}</p>
      <p>{data.category}</p>
      <p className={`${data.type === "income" ? "text-emerald-500" : "text-pink-600"}`}>&#8377;{data.amount}</p>
    </div >
    }
    </>
  )
}

export default TransactionDetails