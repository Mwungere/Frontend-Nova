"use client";
import React, { useState } from 'react'

const Payment = () => {

    // Input state
    const [formData, setFormData] = useState({
        holderName: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
        discountCode: '',

    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);


        setFormData({
            holderName: '',
            cardNumber: '',
            expiry: '',
            cvc: '',
            discountCode: '',

        });

    };

    return (
        <div className=' w-full flex-1 flex flex-col justify-center items-center pt-10 text-black'>
            <h1 className=' w-full font-body font-bold text-2xl mb-5 capitalize md:pl-10 sm:text-center'>Let's make payment</h1>
            <div className=' w-full flex flex-col justify-center items-center md:flex-row-reverse'>
                <div className='  min-w-[300px] h-[400px]  flex flex-col bg-white rounded-lg shadow-md relative xl:w-[400px]'>
                    <p className=' text-lg font-body p-3'>You're Paying</p>
                    <div className=' w-full absolute bottom-5 flex flex-col justify-center items-center px-5'>
                        <h1 className='self-start font-body font-bold text-3xl mb-2'>$450.00</h1>
                        <div className=' flex w-full justify-between border-b border-gray-300 pb-3 mb-3'>
                            <p className=' font-body font-semibold text-lg'>Discounts & Offers</p>
                            <p className=' font-body font-semibold text-lg'>$ 0.00</p>
                        </div>
                        <div className=' flex w-full justify-between '>
                            <p className=' font-body font-semibold text-lg'>Tax</p>
                            <p className=' font-body font-semibold text-lg'>$ 0.00</p>
                        </div>
                        <div className=' flex w-full justify-between'>
                            <p className=' font-body font-semibold text-xl'>Total</p>
                            <p className=' font-body font-bold text-xl'>$ 450.00</p>
                        </div>

                    </div>
                </div>

                <div className=' w-full md:max-w-[500px]  flex flex-col mt-5 justify-center items-center xl:max-w-[600px] lg:mr-10'>
                    <p className=' text-wrap font-body font-medium p-2 md:pl-10 sm:text-center sm:max-w-[400px] xl:max-w-full lg:pl-0  lg:text-start'>
                        To start your subscription, input your card details to make payment. You will be redirected to your banks authorization page .
                    </p>

                    <form className='w-full flex flex-col justify-center items-center my-10 xl:items-start' onSubmit={handleSubmit}>
                        <div className=' w-full sm:w-[390px] xl:w-full flex flex-col items-start'>
                            <label className=' font-body font-normal'>Card holder's Name *</label>
                            <input
                                type="text"
                                className=' w-full border border-[#9090A7] rounded-sm p-3 mt-3 outline-gray-400 bg-transparent'
                                name='holderName'
                                placeholder='eg. Mohamed'
                            value={formData.holderName}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className=' w-full sm:w-[390px] xl:w-full flex flex-col items-start mt-5'>
                            <label className=' font-body font-normal'>Card Number</label>
                            <div className='relative w-full mt-3'>
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 mr-2'>
                                    <img src='/mastercard.svg' className=' w-10 h-10' />
                                </span>

                                <input
                                    type='numbers'
                                    className='w-full border border-[#9090A7] rounded-sm p-3 pl-14 pr-10 outline-gray-400 bg-transparent'
                                    name='cardNumber'
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    placeholder="eg: 9870 3456 7890 6473"
                                />


                            </div>
                        </div>

                        <div className=' w-full flex flex-col justify-center items-center mt-5 xl:items-start xl:flex-row xl:justify-between'>
                            <div className=' w-full sm:w-[390px]  flex flex-col items-start xl:flex-1 xl:max-w-[45%] '>
                                <label className=' font-body font-normal'>Expiry*</label>
                                <input type="text"
                                    className=' w-full border border-[#9090A7] rounded-sm p-3 mt-3 outline-gray-400 bg-transparent'
                                    name="expiry"
                                    placeholder='eg. 03 / 25'
                                value={formData.expiry}
                                onChange={handleInputChange}
                                />
                            </div>

                            <div className=' w-full sm:w-[390px] flex flex-col items-start  mt-7 lg:mt-0 xl:flex-1 xl:max-w-[45%]'>
                                <label className=' font-body font-normal'>CVC</label>
                                <input
                                    type="text"
                                    className=' w-full border border-[#9090A7] rounded-sm p-3 mt-3 outline-gray-400 bg-transparent'
                                    name='cvc'
                                    placeholder='eg. 654'
                                value={formData.cvc}
                                onChange={handleInputChange}
                                />
                            </div>
                        </div>


                        <div className=' w-full sm:w-[390px] xl:w-full flex flex-col items-start mt-5'>
                            <label className=' font-body font-normal'>Discount Code</label>
                            <div className='relative w-full mt-3'>


                                <input
                                    type='text'
                                    className='w-full border border-[#9090A7] rounded-sm p-3 pr-10 outline-gray-400 bg-transparent'
                                    name='discountCode'
                                    value={formData.discountCode}
                                    onChange={handleInputChange}
                                    placeholder="eg: Vanessa-20-off"
                                />

                                <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 mr-2'>
                                    <button type='button' className=' border-none font-body text-secondary'>Apply</button>
                                </span>

                            </div>
                        </div>

                        <div className=' w-full flex justify-center items-center mt-7 xl:justify-start'>
                            <button type='submit' className='font-body font-bold text-white bg-secondary py-2 px-7 rounded-lg ml-5 lg:px-16 lg:py-3 lg:ml-0'>Pay Now</button>
                            <button type='button' className='font-body font-bold bg-white py-2 px-7 border rounded-lg ml-5 lg:px-16 lg:py-3'>Cancel</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Payment