import React from 'react'
import TKS from "../../assets/images/icon-thank-you.svg"

export default function ThankYou() {
  return (

    <div className="box_template bg-white w-[21rem] h-[21.5rem] absolute top-[6rem] rounded-[0.7rem]
    shadow-[rgba(13,_38,_76,_0.19)_0px_2px_10px] flex ">

        <div className="box_inside w-[88%] h-[88%]  m-auto flex flex-col justify-center items-center  ">

            <div className="up w-2/3 h-[58%]  text-center flex flex-col justify-end gap-7 ">


                <div className="image_area w-[30%] h-[30%]  self-center">
                    <img src={TKS} alt="" srcset="" />
                </div>

                {/* title area */}
                <h1 className='text-[1.5rem] font-semibold leading-1 ' >Thank you! </h1>
            </div>

            <div className="text_info w-full h-[42%] text-center ">
                    {/* text info */}
                <p className='text-[0.9rem] font-medium text-[rgb(150,153,171)] leading-[1.3rem]'>
                    
                    Thank you for confirming your suscribtion! We hope you have fun using our platform. If you ever support,
                    please feel free to email us at support@loremgaming.com
                </p>

            </div>


        </div>

    </div>


  )
}
