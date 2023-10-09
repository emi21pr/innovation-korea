import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Collections from '../components/Collections'
import Products from '../components/Products'
import Offers from '../components/Offers'
import Testimonials from '../components/Testimonials'
import Instagram from '../components/Instagram'
import QR from '../components/QR'

function Home() {
    return (
        <div className='py-6 lg:px-[50px] px-4 gap-5 flex flex-col'>
            <Navbar />
            <Hero/>
            <About/>
            <Collections/>
            <Products/>
            <Offers/>
            <Testimonials/>
            <Instagram/>
            <QR/>
        </div>
    )
}

export default Home
