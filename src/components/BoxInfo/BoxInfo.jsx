import React from 'react'

export default function BoxInfo() {
  return (

    <div className="box_template bg-white w-[21rem] h-[22rem] absolute top-[6rem] rounded-[0.7rem]
    shadow-[rgba(13,_38,_76,_0.19)_0px_2px_10px] flex ">

        <div className="box_inside w-[88%] h-[78%]  m-auto flex flex-col justify-between ">

        <div className="title_area w-full h-[10%] ">

            {/* title area */}
            <h1 className='text-[1.5rem] font-semibold  leading-3' >Personal info</h1>
        </div>

        <div className="text_info w-[76%]  h-[22%] ">
                {/* text info */}
            <p className='text-[0.9rem] font-medium text-[rgb(150,153,171)]'>Please provide your name, email address, and phone number</p>

        </div>

        <div className="fields w-full  h-[67%]">

            <form className='w-full h-full  flex flex-col justify-between'>

                <div className="field_area w-full h-[29%]  flex flex-col justify-between">
                    <div className="top_text w-full h-[21%]  flex justify-between">
                        <div className="left w-[70%] h-full   ">
                           <label for="nameUser">

                            <p className='text-[0.8rem] leading-3 font-medium'>Your name is :</p>
                           </label>
                        </div>
                        
                        <div className="right w-[40%] h-full   ">

                            {/* place where people forget to input his data  */}

                        </div>
                    </div>

                    <div className="bot_field w-full h-[69%]">

                            <input type="text" id="nameUser" className='w-full h-full border-[grey] border-[1px] rounded-[0.3rem] placeholder:pl-2 placeholder:text-[0.9rem] focus:outline-purple-600'placeholder="User name" />
                    </div>



                </div>

                <div className="field_area w-full h-[29%]  flex flex-col justify-between">
                    <div className="top_text w-full h-[21%]  flex justify-between">
                        <div className="left w-[70%] h-full   ">
                           <label for="email">

                            <p className='text-[0.8rem] leading-3 font-medium'>Your email is :</p>
                           </label>
                        </div>
                        
                        <div className="right w-[40%] h-full   ">

                            {/* place where people forget to input his data  */}

                        </div>
                    </div>

                    <div className="bot_field w-full h-[69%] ">

                            <input type="email" id="email" className='w-full h-full  border-[grey] border-[1px] rounded-[0.3rem] placeholder:pl-2 placeholder:text-[0.9rem] focus:outline-purple-600'placeholder="infoUser@email.com" />
                    </div>

                </div>

                <div className="field_area w-full h-[29%]  flex flex-col justify-between">
                    <div className="top_text w-full h-[21%]  flex justify-between">
                        <div className="left w-[70%] h-full   ">
                           <label for="phone">

                            <p className='text-[0.8rem] leading-3'>Phone Number</p>
                           </label>
                        </div>
                        
                        <div className="right w-[40%] h-full   ">

                            {/* place where people forget to input his data  */}

                        </div>
                    </div>

                    <div className="bot_field w-full h-[69%] ">

                            <input type="number" id="phone" className='w-full h-full border-[grey] border-[1px] rounded-[0.3rem] placeholder:pl-2 placeholder:text-[0.9rem] focus:outline-purple-600 focus:appearance-none 'placeholder="e.g.+1 234 567 890" />
                    </div>

                </div>


            </form>


        </div>


        </div>

    </div>

    

  )
}


{/* <div className="box_template bg-white w-[21rem] h-[22rem] absolute top-[6rem] rounded-[0.7rem]
shadow-[rgba(13,_38,_76,_0.19)_0px_2px_10px] flex "> */}