import React, { useEffect, useState } from 'react'

export default function PickAdds(props) {
    console.log(props);

    const [bckOnlineService, setBckOnlineService] = useState(false);
    const [bckCustomizable, setBckCustomizable] = useState(false);
    const [bckLargerStorage, setBckLargerStorage] = useState(false);


    const [borderOnlineServices, setBorderOnlineServices] = useState(false);
    const [borderCustomizable, setBorderCustomizable] = useState(false);
    const [borderLargerStorage, setBorderLargerStorage] = useState(false);

    const [checkboxOnlineService, setCheckboxOnlineService] = useState(false);
    const [checkboxCustomizable, setCheckboxCustomizable] = useState(false);
    const [checkboxLargerStorage, setCheckboxLargerStorage] = useState(false);


    let handleAddsSelection = (adds, price) => {
        let userAdds = {
            onlineService: adds === 'onlineService',
            customizable: adds === 'customizable',
            largerStorage: adds === 'largerStorage'
        };
    
        let isSelected = userAdds[adds];
    
        props.addAddsOnUser(userAdds);
        props.setIsFieldsFilledAdds(adds);
    
        if (isSelected) {
            props.addPrice(price);
        } else {
            props.removePrice(price);
        }
    
        // Mettre à jour l'état de la case à cocher en fonction de l'option sélectionnée/désélectionnée
        if (adds === 'onlineService') {
            setBckOnlineService(!bckOnlineService);
            setBorderOnlineServices(!borderOnlineServices);
            setCheckboxOnlineService(!checkboxOnlineService);
        } else if (adds === 'customizable') {
            setBckCustomizable(!bckCustomizable);
            setBorderCustomizable(!borderCustomizable);
            setCheckboxCustomizable(!checkboxCustomizable);
        } else if (adds === 'largerStorage') {
            setBckLargerStorage(!bckLargerStorage);
            setBorderLargerStorage(!borderLargerStorage);
            setCheckboxLargerStorage(!checkboxLargerStorage);
        }
    };
    

// handleFormat();


  return (

    <div className="box_template bg-white w-[21rem] h-[23.5rem] absolute top-[6rem] rounded-[0.7rem]
    shadow-[rgba(13,_38,_76,_0.19)_0px_2px_10px] flex ">

        <div className="box_inside w-[88%] h-[88%]  m-auto flex flex-col justify-between  ">

            <div className="title_area w-full h-[10%] ">

                {/* title area */}
                <h1 className='text-[1.5rem] font-semibold  leading-1' >Pick add-ons</h1>
            </div>

            <div className="text_info w-[76%]  h-[12%]  ">
                    {/* text info */}
                <p className='text-[0.9rem] font-medium text-[rgb(150,153,171)] leading-[1.3rem]'>Add-ons help enchance your gaming experience.</p>

            </div>

            <div className="fields w-full  h-[69%] flex flex-col justify-between ">

                

                <div className="row-start-1 h-full  grid grid-cols-1 grid-rows-3  gap-3 ">
                        {/* first button start*/}
                    <button  className={`row-start-1 h-full grid border-${borderOnlineServices ? 'purple-600' : "[rgba(150,153,171,0.4)]"} border-[1px] rounded-[0.3rem]   bg-${bckOnlineService ? 'gray-200' : 'white'}`}
                    
                    onClick={() => {handleAddsSelection('onlineService', 1), chbg()}}>

                        <div className="boxfield h-[66%] w-[90%] m-auto flex ">

                            <div className="logo_area w-[14%] h-full flex  items-center  ">

                                {/* <img src={ARCADE} alt="" srcset="" className='w-[93%] h-[93%] my-auto'/> */}
                                <input type="checkbox" checked={checkboxOnlineService} className="checkbox checkbox-sm border-[rgba(0,0,0,0.5)] checked: rounded-[0.3rem] checked:border-purple-600 [--chkbg:theme(colors.purple.600)] [--chkfg:white]" />


                            </div>

                            <div className="text_area   text-start w-[86%]  flex ">
                                <div className="title_box flex flex-col gap-1 w-[86%]">
                                    <h3 className='font-extrabold text-[rgba(2,41,90,1)] text-[0.8rem] mt-1 '>Online service</h3>
                                    <p className='font-medium text-[0.7rem] text-[grey]'>Acces to multiplayer games </p>
                                </div>



                                    {/* price area */}
                                    <div className="right_price w-[25%] h-full  flex justify-center items-center">

                                        <p className='text-[0.8rem] text-purple-600  ' >+${ props.format == "yr"?  props.priceOnlineServices*10 : props.priceOnlineServices
                                                                                              }
                                                                                                /{props.format}</p>
                                    </div>

                              
                            </div>

                        </div>
     
                    </button>

                    
                {/* first button end */}


                {/* second button start */}

                    <button className={`row-start-2 h-full self-center grid border-${borderCustomizable ? 'purple-600' : "[rgba(150,153,171,0.4)]"} border-[1px] rounded-[0.3rem]  ${bckCustomizable ? 'bg-gray-200' : ''}`}
                        onClick={() => handleAddsSelection('customizable',2)}>

                        <div className="boxfield h-[66%] w-[90%] m-auto flex ">

                            <div className="logo_area w-[14%] h-full flex  items-center  ">

                                {/* <img src={ARCADE} alt="" srcset="" className='w-[93%] h-[93%] my-auto'/> */}
                                <input type="checkbox" checked={checkboxCustomizable} className="checkbox checkbox-sm border-[rgba(0,0,0,0.5)] rounded-[0.3rem] checked:border-purple-600 [--chkbg:theme(colors.purple.600)] [--chkfg:white]" />


                            </div>
                        
                            <div className="text_area   text-start w-[86%]  flex ">
                                <div className="title_box flex flex-col gap-1 w-[86%]">
                                    <h3 className='font-extrabold text-[rgba(2,41,90,1)] text-[0.8rem] mt-1 '>Customizable profile</h3>
                                    <p className='font-medium text-[0.7rem] text-[grey]'>Custom theme on your profile </p>
                                </div>



                                    {/* price area */}
                                    <div className="right_price w-[25%] h-full  flex justify-center items-center">

                                        <p className='text-[0.8rem] text-purple-600  ' >+${ props.format == "yr"?  props.priceLargerStorage*10 : props.priceLargerStorage
                                                                                              }
                                        /{props.format}</p>
                                    </div>

                                
                            </div>
                        
                        </div>
     
                    </button>

                         {/* second button end */}

                         {/* third button start */}

                         <button className={`row-start-3 h-full self-end grid border-${borderLargerStorage ? 'purple-600' : "[rgba(150,153,171,0.4)]"} border-[1px] rounded-[0.3rem]  ${bckLargerStorage ? 'bg-gray-200' : ''}`} 
                                onClick={() => handleAddsSelection('largerStorage',2)}>

                            <div className="boxfield h-[66%] w-[90%] m-auto flex ">

                                <div className="logo_area w-[14%] h-full flex  items-center  ">
                            
                                 {/* <img src={ARCADE} alt="" srcset="" className='w-[93%] h-[93%] my-auto'/> */}
                                    <input type="checkbox" checked={checkboxLargerStorage} className="checkbox checkbox-sm border-[rgba(0,0,0,0.5)] rounded-[0.3rem] checked:border-purple-600 [--chkbg:theme(colors.purple.600)] [--chkfg:white]" />
                            
                            
                                </div>
                        
                                <div className="text_area   text-start w-[86%]  flex ">
                                    <div className="title_box flex flex-col gap-1 w-[86%]">
                                        <h3 className='font-extrabold text-[rgba(2,41,90,1)] text-[0.8rem] mt-1 '>Larger storage</h3>
                                        <p className='font-medium text-[0.7rem] text-[grey]'>Extra 1TB of cloud save </p>
                                    </div>



                                    {/* price area */}
                                    <div className="right_price w-[25%] h-full  flex justify-center items-center">

                                        <p className='text-[0.8rem] text-purple-600  ' >+${ props.format == "yr"?  props.priceCustomizable*10 : props.priceCustomizable
                                                                                              }
                                                                        /
                                                                    {props.format}</p>
                                    </div>

                                </div>
                        
                            </div>
     

                        </button>
       

                    

                </div>

                         {/* third button end*/}
 

            </div>


        </div>

    </div>
   
    
  )
}
