import React from 'react'

export default function BoxInfo() {
  return (


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

                            <input type="text" id="nameUser" className='w-full h-full border-[grey] border-[1px] rounded-[0.3rem] placeholder:pl-2 placeholder:text-[0.9rem]'placeholder="User name" />
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

                            <input type="email" id="email" className='w-full h-full  border-[grey] border-[1px] rounded-[0.3rem] placeholder:pl-2 placeholder:text-[0.9rem]'placeholder="infoUser@email.com" />
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

                            <input type="number" id="phone" className='w-full h-full border-[grey] border-[1px] rounded-[0.3rem] placeholder:pl-2 placeholder:text-[0.9rem]'placeholder="e.g.+1 234 567 890" />
                    </div>

                </div>

            {/* <div class="mb-5">

                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />

            </div> */}


            </form>
{/* 
        <form class="max-w-sm mx-auto h-full bg-slate-500 flex flex-col">

          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

        </form> */}


        </div>


    </div>
  )
}
