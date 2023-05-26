import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { swiped, toSwipe } from '../redux/pocketSlice';

function TransactionDetails(details) {
  const data = details.details;
  const dispatch = useDispatch()

  //Drag States
  const [dragged, setDragged] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const toDrag = useSelector((state)=>state.pocket.toswipe)/* 
  const nodeRef = useRef(null); */

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
  }
  const handleUnClick = ()=>{
    dispatch(toSwipe(false))
  }

  //Swipe Functions
  const [delBg,setDelBg] = useState(0)
  const handleDrag = (event, { deltaX }) => {
    setDelBg(deltaX)
    if (deltaX < -6) {
      setDragged(true);
    }
  };
  const handleDragStop = () => {
    if (dragged) {
      toDelete()
      dispatch(toSwipe(false))
    } else {
      setPosition({ x: 0, y: 0 });
    }
    setDragged(false);
  };

  //Delete Related Functions
  const toDelete = () =>{
    console.log(dragged);
    dispatch(swiped({swipe:true,id:data.id}))
  }
  return (
    <>
    {
    toDrag?
    <div className={`${delBg===0?'':'bg-red-900'}  w-72 mr-2 py-1 flex relative`}>
      <p className='relative ml-auto mr-8 text-slate-00'>Delete</p>
      <Draggable axis='x' className='absolute w-72' position={position} onDrag={handleDrag} onStop={handleDragStop}>
        <div className="py-3 flex absolute mt-[-1rem]">
        <div className={`absolute w-72 p-1 mr-2 flex justify-between cursor-pointer border-l-[0.3rem]  ${toDrag ? 'bg-slate-950' : 'bg-slate-950'} ${data.type === "income" ? 'border-emerald-500' : 'border-pink-700'}`} onMouseLeave={handleUnClick}  onTouchEnd={handleUnClick} >
          <div className="w-[5.5rem] flex justify-start mr-1">
          <p className=''>{data.date}</p></div>
          <div className="w-[7.5rem] flex justify-center border-l border-slate-900">
          <p>{data.category}</p></div>
          <div className="w-20 flex justify-end border-l border-slate-900">
          <p className={`${data.type === "income" ? "text-emerald-500" : "text-pink-600"}`}>&#8377;{data.amount.toLocaleString()}</p>
          </div>
        </div>
        </div>
    </Draggable>
    </div>
    :
    <div className={`bg-slate-950 border-l-[0.3rem] w-72 p-1 mr-2 flex justify-stretc cursor-pointer ${data.type === "income" ? 'border-emerald-500' : 'border-pink-700'}`}  onClick={handleClick}>
      <div className="w-[5.5rem] flex justify-start mr-1">
      <p className=''>{data.date}</p></div>
      <div className="w-[7.5rem] flex justify-center border-l border-slate-950">
      <p>{data.category}</p></div>
      <div className="w-20 flex justify-end border-l border-slate-950">
      <p className={`${data.type === "income" ? "text-emerald-500" : "text-pink-600"}`}>&#8377;{data.amount.toLocaleString()}</p>
      </div>
    </div>
    }
    </>
  )
}

export default TransactionDetails