import React, { useEffect, useState } from 'react'
import BgTemplate from '../BgTemplate/BgTemplate'
import BoxInfo from '../BoxInfo/BoxInfo'
import SelectPlan from '../SelectPlan/SelectPlan'
import PickAdds from '../PickAdds/PickAdds'
import FinishUp from '../FinishUp/FinishUp'
import "../PlanTemplate/PlanTemplate.css"
import ThankYou from '../ThankYou/ThankYou'

export default function PlanTemplate(props) {
    // console.log(props.addPrice);

    // console.log(props.dataUser);

    //* navigation between pages usestate and method start */

    const [currentPage, setCurrentPage] = useState(props.currentPage);


    let goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    let goToNextPage = () => {
        if (currentPage == 1 && !isFieldsFilled) {
            // check if current page is box info and its value are input
            return;
        }
        if (currentPage == 2 && !isFieldsFilledSelectPlan) {
            // Ne pas passer à la page suivante si aucun plan n'a été sélectionné
            return;
        }
        if (currentPage < 5) {
            setCurrentPage(currentPage + 1);
        }
    };
    
    let goToFirstPage = () => {
        setCurrentPage(2);
    };

    //* navigation between pages usestate and method end */


    //* Getting data user and method start */
    // const [dataUser, setDataUser] = useState(props.dataUser);

    /** method to add name to user date */
    // props.addName

    /** method to add phone to user date */
    // props.addPhone

    /** method to add mail to user date */
    // props.addMail



    // console.log(dataUser);

    //* Getting data user and method end */




    //* Check if field from boxInfo are all checked start */

    const [isFieldsFilled, setIsFieldsFilled] = useState(false);

    //* Check if field from boxInfo are all checked end */



    //* Check if field from select plan are all checked start */

    const [isFieldsFilledSelectPlan, setIsFieldsFilledSelectPlan] = useState(false);
    
        // console.log(isFieldsFilledSelectPlan);

    //* Check if field from select plan are all checked end */


    //* Check if field from select plan are all checked start */

    const [isFieldsFilledAdds, setIsFieldsFilledAdds] = useState(false);
    
        // console.log(isFieldsFilledSelectPlan);

    //* Check if field from select plan are all checked end */


    //* usestates  from select plan area start*/
    const [priceArcade, setPriceArcade] = useState(9);
    const [priceAdvance, setPriceAdvance] = useState(12);
    const [pricePro, setPricePro] = useState(15);
    const [format, setFormat] = useState("mo");

    //* usestates  from select plan area end*/


    //* usestates  from pick adds on area start*/
    const [priceOnlineServices, setPriceOnlineServices] = useState(1);
    const [priceLargerStorage, setPriceLargerStorage] = useState(2);
    const [priceCustomizable, setPriceCustomizable] = useState(2);

    //* usestates  from pick adds on area end*/

    
  return (
    <div className='plan_template w-full h-full relative flex flex-col items-center bg-[rgb(240,246,255)] '>

        <BgTemplate />


            {currentPage == 1 && <BoxInfo 
                                        dataUser={props.dataUser} 
                                            addName={props.addName} 
                                                addPhone={props.addPhone} 
                                                    addMail={props.addMail} 
                                                        setIsFieldsFilled={setIsFieldsFilled} />}

            {currentPage == 2 && <SelectPlan 
                                            dataUser={props.dataUser} 
                                                    addPlan={props.addPlan}
                                                        addPlanUser={props.addPlanUser}
                                                            setIsFieldsFilledSelectPlan={setIsFieldsFilledSelectPlan} 
                                                                addPrice={props.addPrice}   
                                                                    priceArcade={priceArcade} setPriceArcade={setPriceArcade}
                                                                        priceAdvance={priceAdvance} setPriceAdvance={setPriceAdvance}
                                                                            pricePro={pricePro} setPricePro={setPricePro}
                                                                                format={format} setFormat={setFormat}
                                                                    />}

            {currentPage == 3 && <PickAdds 
                                            dataUser={props.dataUser} 
                                                addAddsOnUser={props.addAddsOnUser}
                                                    setIsFieldsFilledAdds={setIsFieldsFilledAdds}
                                                        setIsFieldsFilledSelectPlan={setIsFieldsFilledSelectPlan} 
                                                            addPrice={props.addPrice}   
                                                                priceOnlineServices={priceOnlineServices} setPriceOnlineServices={setPriceOnlineServices}
                                                                    priceLargerStorage={priceLargerStorage} setPriceLargerStorage={setPriceLargerStorage}
                                                                        priceCustomizable={priceCustomizable} setPriceCustomizable={setPriceCustomizable}
                                                                            format={format}
                                                        />}

                                                                                    
            {currentPage == 4 && <FinishUp currentPage={currentPage} setCurrentPage={setCurrentPage}  goToFirstPage={goToFirstPage} />}

            {currentPage == 5 && <ThankYou/>}


            
        <div className="btn_change_area w-full h-[8%] bg-white absolute bottom-0 flex ">

                <div className="inside h-[50%] w-[90%] flex justify-between m-auto">
                
                    <div className="left w-[19%] h-full  flex items-center"  >
                        { ( currentPage > 1  && currentPage < 5) && <p className='font-bold cursor-pointer'  onClick={goToPreviousPage}> Go Back</p> }

                        
                    </div>

                    <div className="right w-[25%] h-full  flex "  >

                    {currentPage == 4 && 
                                        <button className='text-white text-[0.8rem] h-full w-full rounded-lg bg-[rgb(71,61,255)] m-auto font-bold' onClick={goToNextPage}>Confirm</button> }

                    { currentPage < 4  ? 
                                        <button    
                                        disabled={!isFieldsFilled }
                                        className='text-white text-[0.8rem] h-full w-full rounded-lg bg-[rgb(2,41,90)] m-auto font-bold' onClick={goToNextPage}>Next Step</button> 
                                        : "" 
                    }
                        
                    </div>

                </div>            
            
        </div>
    </div>
  )
}
