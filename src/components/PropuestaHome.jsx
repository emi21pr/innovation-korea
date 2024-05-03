import React from 'react'

function PropuestaHome() {
    return (
        <div className='pb-12 pt-6 w-full h-[25rem] border-b '>
            <div className='w-full h-full bg-propuesta rounded-md p-16 flex justify-center text-white text-center items-center lg:items-start lg:text-left flex-col gap-4'>
                <p className='text-sm font-light'> <span className='font-bold text-4xl'>Flujo Libre</span><br/><br/>Una experiencia inmersiva de educación menstrual</p>
                <a href='/propuesta' className='w-fit px-4 py-2 bg-[#202020] hover:bg-[#494949] transition '>Ver Propuesta</a>
            </div>
        </div>
    )
}

export default PropuestaHome
