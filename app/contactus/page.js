"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequest, setServiceRequest] = useState('Request For Service');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!fullName || !email || serviceRequest === 'Request For Service' || !phoneNumber) {
      setError('Please fill in all details.');
      return;
    }

  };

  return (
    <section className='w-[100%] h-[100vh]  md:h-[100vh] flex justify-center items-center'>
      <main className='flex justify-between items-center h-[70vh] mt-[-80px] w-[100%] md:block'>
        <div className='ml-[100px] md:hidden'>
          <img src='/tech_logo.jpg' className='w-[300px] h-[150px]'/>
        </div>
        <div className='mr-[90px] md:mr-0'>
          <div className='w-[400px] md:w-[90%] md:ml-[4vw] md:mt-[10vh]  pl-5 pr-5 rounded-lg border-[1px] bg-white'>
            <p className='text-[25px] text-center pt-2 pb-2 text-[#3498db] font-semibold'>Contact Us</p>
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
              <input type='number' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='w-[100%] pt-2 pb-2 pl-2 pr-2 bg-gray-200 border-[1px] border-gray-400 outline-none rounded-lg mt-3 mb-3'/> 
              {error && <p className="text-red-500 text-center pt-2 pb-2">{error}</p>}                    
              <div className='flex justify-center'>
                <button onClick={handleSubmit} className='pl-5 pr-5 text-center pt-1 pb-1 rounded-lg text-white bg-[#3498db] font-600 mt-2 mb-3'>Submit</button>
              </div>
             
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Page;
