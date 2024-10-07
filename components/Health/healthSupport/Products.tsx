import { products } from '@/constants'
import React from 'react'

const Products = () => {
    return (
        <div className=' w-full flex flex-col justify-center items-center md:flex-row md:flex-wrap lg:space-x-10 -mt-16'>
            {
                products.map(({ product, img, id }) => (
                    <div key={id} className=' bg-white w-[300px] h-[400px] my-5 rounded-xl flex flex-col relative md:mr-10 lg:mr-0'>
                        <img src={img} alt="img" className=' mx-auto self-start mt-2' />
                        <div className=' w-fit h-fit bg-secondary p-2 rounded-xl absolute bottom-28 left-16'>
                            <img src="/hands.svg" alt="img" className=' min-w-14' />
                        </div>
                        <button className=' font-body font-semibold bg-secondary text-white w-fit self-end mr-5 px-5 py-2 rounded-lg absolute bottom-16'>Read more</button>
                        <p className=' font-body font-bold text-lg absolute bottom-6 left-5'>{product}</p>

                    </div>
                ))
            }
        </div>
    )
}

export default Products