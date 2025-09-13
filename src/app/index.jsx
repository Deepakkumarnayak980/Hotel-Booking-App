import React from 'react'
import Home from './home'
import Header from '@/components/layout/header.layout'
import Footer from '@/components/layout/footer.layout'
import HotelDetails from './hotel-details'

const App = () => {
  return (
    <div>
      
        <Header />
        {/* <Home /> */}
        <HotelDetails />
        <Footer/>
    </div>
      
  )
}

export default App