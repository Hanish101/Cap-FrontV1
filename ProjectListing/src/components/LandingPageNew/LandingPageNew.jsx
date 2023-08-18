import React from 'react'
import '../../css/style.css'
import Hero from './Hero'
import Features from './Features'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import FeaturesBlocks from './FeaturesBlocks.jsx'
import Testimonials from './Testimonials'
import Banner from './Banner'

export default function LandingPageNew() {
    return (
        <>
            <Header />
            {/* <Banner /> */}
            <Hero />
            <Features />
            <FeaturesBlocks />
            {/* <Testimonials /> */}
            {/* <Newsletter /> */}
            <Footer />
        </>
    )
}
