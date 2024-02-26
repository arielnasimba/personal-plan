import React from 'react'
import BgTemplate from '../BgTemplate/BgTemplate'
import BoxInfo from '../BoxInfo/BoxInfo'

export default function PlanTemplate() {
  return (
    <div className='plan_template w-full h-full relative flex flex-col items-center bg-[rgb(240,246,255)] '>

        <BgTemplate />

        <div className="box_template bg-white w-[21rem] h-[22rem] absolute top-[6rem] rounded-[0.7rem]
                            shadow-[rgba(13,_38,_76,_0.19)_0px_2px_10px] flex ">

            <BoxInfo />

        </div>

            {/* <p className='text-white'>cfnbzcnin</p> */}
            


    </div>
  )
}
