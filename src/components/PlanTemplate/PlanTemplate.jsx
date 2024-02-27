import React, { useEffect, useState } from 'react'
import BgTemplate from '../BgTemplate/BgTemplate'
import BoxInfo from '../BoxInfo/BoxInfo'
import SelectPlan from '../SelectPlan/SelectPlan'
import PickAdds from '../PickAdds/PickAdds'
import FinishUp from '../FinishUp/FinishUp'
import "../PlanTemplate/PlanTemplate.css"

export default function PlanTemplate(props) {

    // console.log(props);
    const [currentPage, setCurrentPage] = useState(props.currentPage)
    // console.log(currentPage);
    // useEffect(() => {

    //     console.log(props.currentPage);

      
    
    //   return () => {
        
    //   }
    // }, [props.currentPage])
    

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };
    const goToFirstPage = () => {
       
        setCurrentPage(1);
        
    };


    
  return (
    <div className='plan_template w-full h-full relative flex flex-col items-center bg-[rgb(240,246,255)] '>

        <BgTemplate />


            {currentPage == 1 && <BoxInfo />}
            {currentPage == 2 && <SelectPlan />}
            {currentPage == 3 && <PickAdds />}
            {currentPage == 4 && <FinishUp currentPage={currentPage} setCurrentPage={setCurrentPage}  goToFirstPage={goToFirstPage} />}

            {/* <BoxInfo /> */} 

            {/* <SelectPlan />   */} 

            {/* <PickAdds /> */} 

            {/* <FinishUp /> */} 
            


            {/* <p className='text-white'>cfnbzcnin</p> */}
            

            
        <div className="btn_change_area w-full h-[8%] bg-white absolute bottom-0 flex ">

                <div className="inside h-[50%] w-[90%] flex justify-between m-auto">
                
                    <div className="left w-[19%] h-full  flex items-center"  >
                        {currentPage > 1 && <p className='font-bold'  onClick={goToPreviousPage}> Go Back</p> }

                        
                    </div>

                    <div className="right w-[25%] h-full  flex "  >
                    {currentPage < 4  && <button className='text-white text-[0.8rem] h-full w-full rounded-lg bg-[rgb(2,41,90)] m-auto font-bold' onClick={goToNextPage}>Next Step</button> }
                        
                    </div>

                </div>            
            
        </div>
    </div>
  )
}
