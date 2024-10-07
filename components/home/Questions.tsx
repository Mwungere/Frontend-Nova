"use client"
import { questionsAndAnswers } from '@/constants'
import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown, } from 'react-icons/fa'

const Questions = () => {

    const [showAnswers, setShowAnswers] = useState(Array(questionsAndAnswers.length).fill(false));

    const toggleAnswer = (index: number) => {
        const newShowAnswers = [...showAnswers];
        newShowAnswers[index] = !newShowAnswers[index];
        setShowAnswers(newShowAnswers);
    };

    return (
        <div className=' flex flex-col items-center mt-20'>
            <div className='flex flex-col items-center'>
                <h1 className={` text-5xl font-body font-bold text-[#232A42] lg:text-6xl mb-8`}>Frequently Asked <span className={` font-body font-bold text-secondary `}>Questions</span></h1>
                <p className={` font-body text-[#525252] lg:text-lg px-9 lg:px-20`}>Discover more about our project and its transformative impact by exploring our Frequently Asked Questions (FAQ) section. Gain insights into the intricacies of our Farm Security, Monitoring, and Automation solutions, addressing common queries to provide a comprehensive understanding of our commitment to revolutionizing modern agriculture.</p>
            </div>
            <div className='mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-10 lg:px-20 flex flex-col gap-4 sm:gap-6 md:gap-8'>
                {questionsAndAnswers.map(({ q, ans }, index) => (
                    <div
                        key={index}
                        className={`text-[#232A42] p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-lg w-full ${
                            showAnswers[index] ? 'bg-secondary ' : ` bg-white`
                        }`}
                    >
                        <div className='flex items-center'>
                            <div className={`w-full font-body font-semibold text-md sm:text-lg md:text-xl lg:text-2xl ${showAnswers[index]? 'text-white': ``}`}>{q}</div>
                            <div className={`text-xl hover:cursor-pointer ${showAnswers[index]? 'text-white ': ``}`} onClick={() => toggleAnswer(index)}>
                                {showAnswers[index] ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                        </div>
                        <div
                            className={`overflow-hidden mt-3 sm:mt-4 md:mt-5 lg:mt-6 font-body text-sm sm:text-base md:text-lg lg:text-xl transition-height duration-300 ease-in-out ${
                                showAnswers[index] ? 'max-h-[200px] text-white' : 'max-h-0'
                            }`}
                        >
                            {ans}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Questions
