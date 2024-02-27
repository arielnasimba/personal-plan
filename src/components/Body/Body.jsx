import React, {useState} from 'react'
import '../Body/Body.css'
import PlanTemplate from '../PlanTemplate/PlanTemplate'


export default function Body() {

    // creation of all usestate

    const [currentPage, setCurrentPage] = useState(1);
    const [pageInfo, setPageInfo] = useState(true);
    const [pageSelectPlan, setPageSelectPlan] = useState(false);
    const [pageAddOns, setPageAddOns] = useState(false);
    const [pageFinish, setPageFinish] = useState(false);


  return (

    <body className="area_screen w-[100dvw] h-[100dvh] overflow-x-hidden flex flex-col ">
        <PlanTemplate  pageInfo={pageInfo}   setPageInfo={setPageInfo} 
                            pageSelectPlan={pageSelectPlan} setPageSelectPlan={setPageSelectPlan} 
                                pageAddOns={pageAddOns}  setPageAddOns={setPageAddOns} 
                                    pageFinish={pageFinish}  setPageFinish={setPageFinish} 
                                        currentPage={currentPage}  setCurrentPage={setCurrentPage} 
                                         />

    </body>

  )
}
