import React from 'react'
import qr from "/images/qr.png"

function QR(props) {
    
    return (
        <div className={props.active?'absolute flex flex-col gap-8  items-center justify-center top-0 w-full h-full z-50 backdrop-blur-lg':'hidden'} onClick={()=>props.setActive(false)}>
            <h1 className='bebas-text hero-text text-center text-5xl w-[30rem]'>ESCANEA EL CÓDIGO QR CON TU CELULAR PARA PODER OBSERVAR LA PÁGINA MÁS DE CERCA</h1>
            <img src={qr} alt="QR" className="w-80" />
        </div>
    )
}

export default QR
