import React from 'react'
import Image from 'next/image'
const Gallery = () => {
    return (
        <div className=' flex flex-col items-center mt-20'>
            <div className=' flex flex-col items-center'>
                <h1 className={`text-[#232A42] font-body text-5xl lg:text-6xl font-bold mb-8`}>Our <span className={` font-body text-secondary`}>Gallery</span></h1>
                <p className={` font-body text-[#525252] mb-7 lg:text-lg`}>Explore the heart of our transformative journey in agriculture through our Project Gallery. Immerse yourself in a visual <br /> narrative showcasing the innovation and impact of our Farm Security, Monitoring, and Automation solutions. Witness <br /> firsthand the strides we're making towards a sustainable and efficient future for global agriculture.</p>
            </div>
            <div className=' flex flex-col  lg:flex-row gap-7 flex-wrap'>
                <div className=' flex flex-col md:flex-row gap-7'>
                    <Image
                        src='/image1.svg'
                        width={449}
                        height={506}
                        alt='image'
                        className=''
                    />
                    <div className=' flex flex-col gap-10'>
                        <div className=' flex flex-row gap-7'>
                            <Image
                                src='/image2.svg'
                                width={169}
                                height={238}
                                alt='image'
                            />
                            <Image
                                src='/image3.svg'
                                width={169}
                                height={238}
                                alt='image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/image4.svg'
                                width={378}
                                height={228}
                                alt='image'
                            />
                        </div>
                    </div>
                </div>
                <div className=' mx-auto'>
                    <Image
                        src='/image5.svg'
                        width={337}
                        height={506}
                        alt='image'
                        className=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery
