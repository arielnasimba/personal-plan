import React, {useState} from 'react'

export default function FinishUp(props) {
    console.log(props.goToFirstPage);

    const [currentPage, setCurrentPage] = useState(props.currentPage);

    // const goToFirstPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(1);
    //     }
    // };
  return (


    <div className="box_template bg-white w-[21rem] h-[20rem] min-h-[20rem] max-h-[29rem] absolute top-[6rem] rounded-[0.7rem]
    shadow-[rgba(13,_38,_76,_0.19)_0px_2px_10px] flex ">

        <div className="box_inside w-[88%] h-[88%]  m-auto flex flex-col justify-between  ">

            <div className="title_area w-full h-[10%] ">

                {/* title area */}
                <h1 className='text-[1.5rem] font-semibold  leading-1' >Finishing up</h1>
            </div>

            <div className="text_info w-[76%]  h-[12%] ">
                    {/* text info */}
                <p className='text-[0.9rem] font-medium text-[rgb(150,153,171)] leading-[1.3rem]'>Double-check everything looks OK before confirming.</p>

            </div>

            <div className="fields w-full  flex flex-col  bg-[rgba(173,190,255,0.2)] rounded-[0.5rem] ">

                <div className="select_plan w-[91%] m-auto  flex justify-between border-[rgba(150,153,171,0.4)] border-b-[0.1rem]  pb-4 pt-4 ">



                    {/* plan chosed area */}

                    <div className="left flex flex-col ">

                                            {/* plan chosed  name area */}

                        <h2 className='text-[0.8rem] font-bold '>Arcade (Yearly)</h2>

                                         {/* btn change plan area */}

                        <h2 className='text-[0.8rem] underline text-[grey]' onClick={() => props.goToFirstPage()} >change</h2>

                    </div>

                    <div className="right ">

                                        {/* plan chosed price area */}

                        <p className='text-[0.9rem]  font-extrabold pt-1 '>$15/mo</p>


                    </div>


                    
                </div>
                    {/* place to chosed items */}

                    <div className="select_plan w-[91%] m-auto items-center flex justify-between  py-2 ">

                                {/* plan chosed  name area */}

                            <h2 className='text-[0.8rem] text-[grey] font-medium'>Online services</h2>

                                {/* price of plan chosed */}

                            <p className='text-[0.9rem]  font-extrabold pt-1'>$10/mo</p>

                    </div>

            </div>

            <div className="row-start-2  w-[91%] h-[2rem]  mx-auto flex justify-between">


                <div className="left_ w-[45%] ">

                        {/* total area per ? */}

                    <p className='text-[0.85rem] text-[grey]'>Total ( Per year)</p>
                </div>


                <div className="right_ w-[25%]  text-end">

                        {/* total area per ? */}

                    <p className='text-[0.95rem] text-[rgb(71,61,255)] font-semibold'>$120/yr</p>
                </div>

            </div>


        </div>



    </div>


    )
}
