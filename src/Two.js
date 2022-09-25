import React, { useState } from 'react'
import './App.css'

export default function Example3(props) {
    const [columnJc,setColumnJc] = useState('center');
    const [columnAi,setColumnAi] = useState('baseline');
    const [flexwrap,setFlexwrap] = useState('');    
  
    const handleColumnJc = (e)=>{
      setColumnJc(e.target.id);
    };
    const handleColumnAi = (e)=>{
      setColumnAi(e.target.id);
    }

    const handleFlexwrap = (e)=>{
        setFlexwrap(e.target.id)
    }

  return (
      <div id="example2" className='mx-auto w-full'>
        <div className='w-full flex justify-center'>
          <div className='relative flex flex-col justify-center items-center h-[614px] w-[70%] border'>
          
          <div className={`min-h-[300px] h-[650px] max-h-[560px] min-w-[250px] w-1/2 max-w-[70%] resize overflow-auto flex-${flexwrap} flex-wrap itemBoxContainer relative items-${columnAi} justify-${columnJc} gap-[8px]`}>

            <div className={` invert  h-[100px] w-[100px] bg-black `}> 1</div>
          <div className={` invert  flex items-center h-[100px] w-[100px] bg-red-800`}>2</div>
          <div className={` invert h-[100px] w-[100px] bg-red-600 `}>3</div>
          <div className={` invert  flex items-center  h-[100px] w-[100px] bg-blue-500`}>4</div>
          <div className={` invert h-[100px] w-[100px] bg-gray-500`}>5</div>
              </div>
          </div>
        </div>
        <div className='flex flex-col items-self-start m-[15px] '>
                <div className=''>
          <table>
              
              <tr className='text-left'>
              <td disabled={false}>
                  <button className="py-2 px-1">
                    <span id="center" onClick={(e)=>{handleColumnJc(e)}} >
                      center
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="end" onClick={(e)=>{handleColumnJc(e)}}>
                      flex-end
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id='start' onClick={(e)=>{handleColumnJc(e)}}>
                      flex-start
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="around" onClick={(e)=>{handleColumnJc(e)}} >
                      space-around
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="between" onClick={(e)=>{handleColumnJc(e)}} >
                      space-between
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="evenly" onClick={(e)=>{handleColumnJc(e)}} className={`${columnJc==="evenly"?'bg-blue-700 text-white':''} px-1 hover:bg-blue-400 font-semibold border border-blue-700 rounded`} title='Gives the equal space in x-axis for the flex items'>
                      space-evenly
                    </span>
                  </button>
                </td> 
              </tr>

              <tr className='text-left'>
                  <button className="py-2 px-1">
                    <span id="baseline" onClick={(e)=>{handleColumnAi(e)}}>
                      baseline
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="start" onClick={(e)=>{handleColumnAi(e)}} >
                      flex-start
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="center" onClick={(e)=>{handleColumnAi(e)}} >
                      center
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="end" onClick={(e)=>{handleColumnAi(e)}}>
                      flex-end
                    </span>
                  </button>
              </tr>


          </table>
            </div>
        </div>
      </div>
  )
}