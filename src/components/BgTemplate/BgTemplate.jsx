import React from 'react'
import BGM from "../../assets/images/bg-sidebar-mobile.svg"
import BGD from "../../assets/images/bg-sidebar-desktop.svg"

export default function BgTemplate() {
  return (
    <div className='bg_template w-full h-[18%] bg-black bg-no-repeat flex justify-center  ' style={{backgroundImage: `url(${BGM})`}} >
        {/* <img src={BGM} alt="" srcset="" className='w-full ' /> */}

        


        <ul className=' grid grid-cols-4 grid-rows-1 w-[48%] h-[20%] mt-[6.5%] gap-[1rem]'>

            <li className=''>
                <button type="button" className=' border  w-full h-full rounded-full  text-white text-[0.8rem] font-semibold  '>1</button>
            </li>

            <li className=''>
                <button type="button" className=' border  w-full h-full rounded-full  text-white text-[0.8rem] font-semibold  '>2</button>
            </li>

            <li className=''>
                <button type="button" className=' border  w-full h-full rounded-full  text-white text-[0.8rem] font-semibold  '>3</button>
            </li>

            <li className=''>
                <button type="button" className=' border  w-full h-full rounded-full  text-white text-[0.8rem] font-semibold  '>4</button>
            </li>
        </ul> 
    </div>
  )
}
