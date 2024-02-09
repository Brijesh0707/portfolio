"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const Page = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequest, setServiceRequest] = useState('Request For Service');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading,setLoading]=useState(false)
  const [model,setModel]=useState(false)
  const [data,setData]=useState()

  const handlePhoneNumber = (value)=>{
    setPhoneNumber(value)
  }

  const handleSubmit = async() => {
    setLoading(true)
    if (!fullName || !email || serviceRequest === 'Request For Service' || !phoneNumber) {
      setError('Please fill in all details.');
      setLoading(false)
      return;
    }else{
      setError('')
      
    }
    try{
      const response = await fetch("https://techtonicstudio.onrender.com/details",{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          name:fullName,
          companyemail:email,
          request:serviceRequest,
          phonenumber:phoneNumber
        })
      })
      const res = await response.json()

      if(res.message==="true"){
        alert("email sent")
        setLoading(false)
        localStorage.setItem('email_sent',true)
        setData(res)
        
      }else{
        alert("error coming")
        setLoading(false)
       
      }
      
    }catch(error){
      console.log(error)
    }

  };

  useEffect(()=>{
    const email_sent = localStorage.getItem("email_sent")
    if(email_sent==="true"){
      setModel(true)
    }
  },[data])

  return (
    <section className='w-[100%] h-[100vh]  md:h-[100vh] flex justify-center items-center'>
      <main className='flex justify-between items-center h-[70vh] mt-[-80px] w-[100%] md:block'>
        <div className='ml-[100px] md:hidden'>
          <img src='/tech_logo.jpg' className='w-[300px] h-[150px]'/>
        </div>
        <div className='mr-[90px] md:mr-0'>
          <div className='w-[400px] md:w-[90%] md:ml-[4vw] md:mt-[10vh]  pl-5 pr-5 rounded-lg border-[1px] bg-white'>
            <p className='text-[25px] text-center pt-2 pb-2 text-[#3498db] font-semibold'>Contact Us</p>
           {model===false?<>
            <div>
              <input type='text' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} className='w-[100%] pt-2 pb-2 pl-2 pr-2 bg-gray-200 border-[1px] border-gray-400 outline-none rounded-lg mt-3 mb-3'/>   
              <input type='text' placeholder='Company Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-[100%] pt-2 pb-2 pl-2 pr-2 bg-gray-200 border-[1px] border-gray-400 outline-none rounded-lg mt-3 mb-3'/>                     
              <select value={serviceRequest} onChange={(e) => setServiceRequest(e.target.value)} className='w-[100%] text-[#2f2f2f] font-400 pt-2 pb-2 pl-2 bg-gray-200 border-[1px] border-gray-400 outline-none rounded-lg mt-3 mb-3'>
                <option disabled>Request For Service</option>
                <option>Web Design</option>
                <option>Web Development</option>
                <option>Ecommerce Development</option>
                <option>Web/Android Development</option>
              </select>                    
              <div className='mt-3'>
              <PhoneInput
  country={'in'}
  onChange={handlePhoneNumber}
  value={phoneNumber}
  inputProps={{
    required: true
  }}
  inputStyle={{
    width: '100%', 
    marginRight:'14px',
    paddingTop:'1px',
    paddingBottom:'1px',
    border:'1px solid #DDDDDE',
    borderRadius:'4px',
    marginTop:'0.75rem',
    marginBottom:'0.75rem'


  }}
  placeholder='enter phone number'
  disableCountryGuess={true}
/>
              </div>
              {error && <p className="text-red-500 text-center pt-2 pb-2">{error}</p>}   
               <a href='techtonicstudio.main@gmail.com'></a>
              <div className='flex justify-center mt-2'>
                <button onClick={handleSubmit} className='pl-5 pr-5 text-center pt-1 pb-1 rounded-lg text-white bg-[#3498db] font-600 mt-2 mb-3'>{loading ?<div class="spinner"></div>:'Submit'}</button>
              </div>
             
            </div>
           </>:<>
            <div className='w-[100%] h-[400px]'>
               <div className='w-[100%] h-[100%] flex pt-[20vh] items-center flex-col'>
                  <div className='whatsapp flex gap-2 items-center cursor-pointer'>
                  <a href='https://wa.me/919009021934' target='_black' className='flex gap-2 items-center'>
                    <img src='/whatsapp.png' className='w-[40px] h-[30px]' />
                    <p className='text-black font-[600]'>+91-9009021934</p>
                    </a>
                  </div>
                  <div className='mail flex gap-3 items-center cursor-pointer mt-5'>
                  <a href='mailto:techtonicstudio.main@gmail.com' target='_black' className='flex gap-2 items-center'>
                    <img src='/mail.png' className='w-[30px] h-[30px]' />
                    <p className='text-black font-[600]'>techtonicstudio.main@gmail.com</p>
                    </a>
                  </div>
               </div>
            </div>
           </>

           }
          </div>
        </div>
      </main>
    </section>
  );
};

export default Page;
