import React, { useEffect } from 'react'
import { data } from '../assest/Data'
import Card from './Card'
import Vector from '../assest/Images/Vector.svg';

function DashBoard() {
  useEffect(() => {
    console.log("data", data)


  }, [])

  return (<div className=' bg-slate-900 '>
    <div className='flex flex-start text-left'  >
      {/* <img src={Vector} alt="" className='ml-10 aling center w-8 h-5'  /> */}

      <p className="text-sm text-sky-700 mt-2 pt-5 font-extrabold  " >trending Assets</p>

    </div>


    <div className='grid grid-cols-3 gap-3  justify-between mt-2' >
      {data.length > 0 && data.map((elm: any) => <Card elem={elm} />)}
    </div>
  </div>
  )
}

export default DashBoard