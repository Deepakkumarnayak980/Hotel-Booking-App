import React from 'react'
import HeroSection from './hero-section'
import TrendingDestination from './tending-destination'
import SearchPage from '@/features/search'

const Home = () => {
  return (
    <>
    <HeroSection />
    <SearchPage />
    <TrendingDestination />
    </>
  )
}

export default Home