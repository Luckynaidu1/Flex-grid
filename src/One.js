import React, { useState } from 'react'
import './App.css';

export default function Example1(props) {
    const [flex,setflex] = useState('');
  

  return (
    <>
      <div id="">
          <h1 className='text-[40px]'>flex box example 1</h1>

        <div className={` h-[200px]  w-full relative flex items justify-${flex} gap-[8px]`}>
          <br></br>
          <div className={` invert  h-[100px] w-[100px] bg-black `}> 1</div>
          <div className={` invert  flex items-center h-[100px] w-[100px] bg-red-800`}>2</div>
          <div className={` invert h-[100px] w-[100px] bg-red-600 `}>3</div>
          <div className={` invert  flex items-center  h-[100px] w-[100px] bg-blue-500`}>4</div>
          <div className={` invert h-[100px] w-[100px] bg-gray-500`}>5</div>
        </div>
        <div className='flex flex-col items-self-start m-[15px] '>
        <div c>
        <div className={`h-[680px] w-full flex-col  relative flex items- justify-${flex} gap-[8px]`}>
        <h1 className='text-[40px]'>flex box example 2</h1>

        <div className={` invert  h-[100px] w-[100px] bg-black `}> 1</div>
          <div className={` invert  flex items-center h-[100px] w-[100px] bg-red-800`}>2</div>
          <div className={` invert h-[100px] w-[100px] bg-red-600 `}>3</div>
          <div className={` invert  flex items-center  h-[100px] w-[100px] bg-blue-500`}>4</div>
          <div className={` invert h-[100px] w-[100px] bg-gray-500`}>5</div>
        </div>
          <table>
            
                  <button className="py-2 px-1 rounded-xl bg-yellow-300"  id="center" onClick={(e)=>setflex(e.target.id)}>
                      center
                      </button>
                  <button className="py-2 px-1 rounded-xl bg-yellow-300" id="end" onClick={(e)=>setflex(e.target.id)}>
                      flex-end
                  </button>,
                  <button className="py-2 px-1 rounded-xl bg-yellow-300"id='start' onClick={(e)=>setflex(e.target.id)}>
                      flex-start

                  </button>,
                 
                  <button className="py-2 px-1 rounded-xl bg-yellow-300" id="between" onClick={(e)=>setflex(e.target.id)}>
                      space-between
                  </button>,
                  <button className="py-2 px-1 rounded-xl bg-yellow-300"id="evenly" onClick={(e)=>setflex(e.target.id)}>
                    space-evenly
                  </button>
                  <button className="py-2 px-1 rounded-xl bg-yellow-300" id="around" onClick={(e)=>setflex(e.target.id)}>
                      space-around
                  </button>,

                  <button className="py-2 px-1 rounded-xl bg-yellow-300">
                    <span id="baseline" onClick={(e)=>setflex(e.target.id)}> 
                      baseline
                    </span>
                  </button>,
                  <button className="py-2 px-1 rounded-xl bg-yellow-300" id="end"onClick={(e)=>setflex(e.target.id)}>
                      flex-end
                  </button>
                  <button className="py-2 px-1 rounded-xl bg-yellow-300" id="start"onClick={(e)=>setflex(e.target.id)}>
                                         flex-start
                  </button>,  
                  <button  id="center" onClick={(e)=>setflex(e.target.id)} className="py-2 px-1 rounded-xl bg-yellow-300">
                      center
                  </button>,
                  
          </table>
        </div>
        </div>
      </div>
    </>
  )
}
