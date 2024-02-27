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


    // user data 

    const [dataUser, setDataUser] = useState(
                                    {
                                        "name" : "",
                                        "email" : "",
                                        "phone" : 0,
                                        "plan" :    {
                                                        "arcade" : false,
                                                        "advanced" : false,
                                                        "pro" : false

                                                    },
                                        "addOns" : {
                                                        "onlineService" : false,
                                                        "customizable" : false,
                                                        "largerStorage" : false
                                                    },
                                        "totalPM" : 0,
                                        "formatTime" : "month" 
                                    }
                                    );

    // console.log(dataUser);


    /**     add name to user data object
     * 
     * @param {*} price : name to asign to user
     */
    let addPrice = (price) =>{
        setDataUser(prevDataUser => ({
            ...prevDataUser,
            totalPM: +price
        }));
    }


    /**     add name to user data object
     * 
     * @param {*} userName : name to asign to user
     */
    let addName = (userName) =>{
        setDataUser(prevDataUser => ({
            ...prevDataUser,
            name: userName
        }));
    }

    /**     add name to user data object
     * 
     * @param {*} userMail : email to asign to user
     */
    let addMail = (userMail) =>{
        setDataUser(prevDataUser => ({
            ...prevDataUser,
            email: userMail
        }));
    }

    /**     add name to user data object
     * 
     * @param {*} userPhone : phone number to asign to user
     */
    let addPhone = (userPhone) =>{
        setDataUser(prevDataUser => ({
            ...prevDataUser,
            phone: userPhone
        }));
    }


    /**     add plan to user data object
     * 
     * @param {*} userPlan : plan to asign to user
     */

    let addPlanUser = (userPlan) => {
        setDataUser(prevDataUser => ({
            ...prevDataUser,
            plan: {
                ...prevDataUser.plan, // Gardez les valeurs actuelles de plan
                ...userPlan // Mettez à jour les valeurs spécifiques du plan
            }
        }));
    };

    

    /**     add adds to user data object
     * 
     * @param {*} adds : plan to asign to user
     */

    let addAddsOnUser = (adds) => {
        setDataUser(prevDataUser => ({
            ...prevDataUser,
            addOns: {
                ...prevDataUser.addOns, // Gardez les valeurs actuelles de plan
                ...adds // Mettez à jour les valeurs spécifiques du plan
            }
        }));
    };

    

  return (

    <body className="area_screen w-[100dvw] h-[100dvh] overflow-x-hidden flex flex-col ">
        <PlanTemplate  pageInfo={pageInfo}   setPageInfo={setPageInfo} 
                            pageSelectPlan={pageSelectPlan} setPageSelectPlan={setPageSelectPlan} 
                                pageAddOns={pageAddOns}  setPageAddOns={setPageAddOns} 
                                    pageFinish={pageFinish}  setPageFinish={setPageFinish} 
                                        currentPage={currentPage}  setCurrentPage={setCurrentPage} 

                                            dataUser={dataUser} addName={addName} addMail={addMail} addPhone={addPhone} 
                                                addPlanUser={addPlanUser} addAddsOnUser={addAddsOnUser} addPrice={addPrice}
                                         />

    </body>

  )
}
