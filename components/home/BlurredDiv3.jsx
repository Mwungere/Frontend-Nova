import React from 'react'

const BlurredDiv3 = () => {
    return (
        <div
            className="relative flex place-items-center top-80 lg:top-60
               before:absolute before:h-[600px] 
               before:w-[900px] before:-translate-x-1/2
               before:rounded-full before:bg-gradient-radial
             before:from-primary before:to-transparent
               before:opacity-60 before:blur-2xl before:content-['']
               after:absolute after:-z-20 after:h-[180px] 
               after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic
             after:from-sky-100 after:to-transparent after:opacity-25
               after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br
               before:dark:from-transparent before:dark:to-primary 
               before:dark:opacity-25 after:dark:from-primary
               after:dark:to-transparent after:dark:opacity-40
               before:lg:h-[500px] before:lg:w-[1000px] z-[-1]"
        >
        </div>
    )
}

export default BlurredDiv3


