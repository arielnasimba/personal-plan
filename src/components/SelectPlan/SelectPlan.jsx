import React, {useState} from 'react'
import ARCADE from "../../assets/images/icon-arcade.svg"
import ADVANCED from "../../assets/images/icon-advanced.svg"
import PRO from "../../assets/images/icon-pro.svg"

export default function SelectPlan(props) {
    console.log(props.addPrice);



    let handleFormatChange = () => {
        props.setFormat(props.format == 'mo' ? 'yr' : 'mo');
        props.setPriceArcade(props.priceArcade == 9 ? 90 : 9);
        props.setPriceAdvance(props.priceAdvance == 12 ? 120 : 12);
        props.setPricePro(props.pricePro == 15 ? 150 : 15);
        
    };


    let handlePlanSelection = (plan,price) => {
        const userPlan = {
            arcade: plan == 'arcade',
            advanced: plan == 'advanced',
            pro: plan == 'pro'
        };

            // Mettre à true uniquement le plan sélectionné
    if (plan == 'arcade') {
        userPlan.arcade = true;
    } else if (plan == 'advanced') {
        userPlan.advanced = true;
    } else if (plan == 'pro') {
        userPlan.pro = true;
    }
        props.addPlanUser(userPlan);
        props.addPrice( price );
        props.setIsFieldsFilledSelectPlan(plan);
    };

    console.log(props);

  return (


    <div className="box_template bg-white w-[21rem] h-[29rem] absolute top-[6rem] rounded-[0.7rem]
    shadow-[rgba(13,_38,_76,_0.19)_0px_2px_10px] flex ">

        <div className="box_inside w-[88%] h-[88%]  m-auto flex flex-col justify-between  ">

            <div className="title_area w-full h-[10%] ">

                {/* title area */}
                <h1 className='text-[1.5rem] font-semibold  leading-1' >Select your plan</h1>
            </div>

            <div className="text_info w-[76%]  h-[12%] ">
                    {/* text info */}
                <p className='text-[0.9rem] font-medium text-[rgb(150,153,171)] leading-[1.3rem]'>You have the option of monthly or yearly billing</p>

            </div>

            <div className="fields w-full  h-[74%] flex flex-col justify-between">

                {/* first button start*/}

                <div className="row-start-1 h-[76%]  grid grid-cols-1 grid-rows-3 ">
                        {/* first button start*/}
                    <button id='arcade' className="row-start-1 h-[90%]  grid border-[rgba(150,153,171,0.4)] border-[1px] rounded-[0.3rem]  focus:border-purple-600  focus:bg-gray-200  "
                           onClick={() => {handlePlanSelection('arcade', 9) }}   value={9}   >

                        <div className="boxfield h-[65%] w-[88%] m-auto flex ">

                            <div className="logo_area w-[20%] h-full flex  ">

                                <img src={ARCADE} alt="" srcset="" className='w-[93%] h-[93%] my-auto'/>

                            </div>

                            <div className="text_area  ml-2 text-start">
                                <div className="title_box">
                                    <h3 className='font-medium'>Arcade</h3>
                                </div>

                                    {/* price area */}
                                <p className='text-[0.8rem] ' >${props.priceArcade}/{props.format}</p>

                                <p></p>
                            </div>

                        </div>
     
                    </button>

                    
                {/* first button end */}


                {/* second button start */}

                    <button id='advanced' className="row-start-2 h-[90%]  self-center  grid border-[rgba(150,153,171,0.4)] border-[1px] rounded-[0.3rem]  focus:border-purple-600  focus:bg-gray-200"
                           onClick={() => handlePlanSelection('advanced',12)}   value={12}    >

                        <div className="boxfield h-[65%] w-[88%] m-auto flex ">

                            <div className="logo_area w-[20%] h-full flex  ">

                                <img src={ADVANCED} alt="" srcset="" className='w-[93%] h-[93%] my-auto'/>

                            </div>

                            <div className="text_area  ml-2 text-start">
                                <div className="title_box">
                                    <h3 className='font-medium'>Advanced</h3>
                                </div>

                                    {/* price area */}
                                <p className='text-[0.8rem]' >${props.priceAdvance}/{props.format}</p>

                                <p></p>
                            </div>
                        
                        </div>
     
                    </button>

                         {/* second button end */}

                         {/* third button start */}

                         <button id='pro' className="row-start-3 h-[90%]  self-end  grid border-[rgba(150,153,171,0.4)] border-[1px] rounded-[0.3rem]  focus:border-purple-600  focus:bg-gray-200"
                            onClick={() => handlePlanSelection('pro',15)}   value={15} 
                         >

                            <div className="boxfield h-[65%] w-[88%] m-auto flex ">

                                <div className="logo_area w-[20%] h-full flex  ">

                                    <img src={PRO} alt="" srcset="" className='w-[93%] h-[93%] my-auto'/>

                                </div>

                                <div className="text_area  ml-2 text-start">
                                    <div className="title_box">
                                        <h3 className='font-medium'>Pro</h3>
                                    </div>

                                        {/* price area */}
                                    <p className='text-[0.8rem]' >${props.pricePro}/{props.format}</p>

                                    <p></p>
                                </div>

                            </div>

                        </button>
       

                    

                </div>

                         {/* third button end*/}
                <div className="row-start-2 h-[17%] bg-[rgba(173,190,255,0.15)] flex items-center">

                    <div className="boxChosed h-[60%] w-[60%] m-auto justify-between grid grid-rows-1 grid-cols-3 gap-[0.4rem]">

                        <div className=" montly  row-start-1  ">

                            {/* montly version */}
                            <p className='text-[0.85rem] my-1 font-medium'>Monthly</p>

                        </div>
                        <div className=" btt row-start-1   flex justify-center items-center ">

                            
                            {/* change version btn*/}

                            <div className="box_btn  w-[70%] h-[60%] flex">
                                <input type="checkbox" class="toggle toggle-sm [--tglbg:rgb(2,41,90)] bg-white hover:bg-white  border-white " onChange={handleFormatChange}  />

                            </div>

                        </div>


                        <div className=" yearly row-start-1 text-end ">


        
                            <p className='text-[0.85rem] my-1 font-medium'>Yearly</p>

                            {/* yearly version */}
                        </div>

                    </div>



                </div>




            </div>


        </div>

    </div>


  )
}
