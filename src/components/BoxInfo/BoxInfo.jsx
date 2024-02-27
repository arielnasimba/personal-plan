import React, {useState} from 'react'

export default function BoxInfo(props) {

    // console.log(props.dataUser);
    

    //* Getting data user and method start */
    const [dataUser, setDataUser] = useState(props.dataUser);

    /** method to add name to user date */
    // props.addName

    /** method to add phone to user date */
    // props.addPhone

    /** method to add mail to user date */
    // props.addMail

    


    const validateFields = () => {
        if (nameUser != '' && mailUser != '' && phoneUser != '') {
            props.setIsFieldsFilled(true);
        } else {
            props.setIsFieldsFilled(false);
        }
    };




    // console.log(dataUser);

    // get name user and add to user data start 

    const [nameUser, setNameUser] = useState('');

    const handleNameUser = (e) => {
        
        setNameUser(e.target.value);
        props.addName(e.target.value) ;  

        validateFields();
    }; 

    // get name user and add to user data end

    // get mail user and add to user data start 

    const [mailUser, setMailUser] = useState('');

    const handleMailUser = (e) => {
        setMailUser(e.target.value);
        props.addMail(e.target.value) ; 
        
        validateFields();
    }; 

    // get mail user and add to user data end

    // get phone user and add to user data start 

    const [phoneUser, setPhoneUser] = useState('');

    const handlePhoneUser = (e) => {
        if (!isNaN(e.target.value ) ) {
            
            setPhoneUser(e.target.value);
            props.addPhone(e.target.value) ;  

            validateFields();
        }
    }; 

    // get phone user and add to user data end


    //* Getting data user and method end */

 

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

                            <p className='text-[0.8rem] leading-3 font-medium'>Your name is : {nameUser}</p>
                           </label>
                        </div>
                        
                        <div className="right w-[40%] h-full   ">

                            {/* place where people forget to input his data  */}

                        </div>
                    </div>

                    <div className="bot_field w-full h-[69%]">

                            <input type="text" id="nameUser" className='w-full h-full border-[grey] border-[1px] rounded-[0.3rem] placeholder:pl-2 placeholder:text-[0.9rem] focus:outline-purple-600'placeholder="User name" 

                                value={nameUser}
                                    onChange={handleNameUser} 
                            />
                    </div>



                </div>

                <div className="field_area w-full h-[29%]  flex flex-col justify-between">
                    <div className="top_text w-full h-[21%]  flex justify-between">
                        <div className="left w-[70%] h-full   ">
                           <label for="email">

                            <p className='text-[0.8rem] leading-3 font-medium'>Your email is :{mailUser}</p>
                           </label>
                        </div>
                        
                        <div className="right w-[40%] h-full   ">

                            {/* place where people forget to input his data  */}

                        </div>
                    </div>

                    <div className="bot_field w-full h-[69%] ">

                            <input type="email" id="email" className='w-full h-full  border-[grey] border-[1px] rounded-[0.3rem] placeholder:pl-2 placeholder:text-[0.9rem] focus:outline-purple-600'placeholder="infoUser@email.com" 

                                    value={mailUser}
                                    onChange={handleMailUser}
                            />
                    </div>

                </div>

                <div className="field_area w-full h-[29%]  flex flex-col justify-between">
                    <div className="top_text w-full h-[21%]  flex justify-between">
                        <div className="left w-[70%] h-full   ">
                           <label for="phone">

                            <p className='text-[0.8rem] leading-3'>Your Phone Number is : {phoneUser}</p>
                           </label>
                        </div>
                        
                        <div className="right w-[40%] h-full   ">

                            {/* place where people forget to input his data  */}

                        </div>
                    </div>

                    <div className="bot_field w-full h-[69%] ">

                            <input type="number" id="phone" className='w-full h-full border-[grey] border-[1px] rounded-[0.3rem] placeholder:pl-2 placeholder:text-[0.9rem] focus:outline-purple-600 focus:appearance-none 'placeholder="e.g.+1 234 567 890" 
                            
                            value={phoneUser}
                            onChange={handlePhoneUser}
                            />
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