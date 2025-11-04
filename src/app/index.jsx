import React from 'react'
import Home from './home'
import Header from '@/components/layout/header.layout'
import Footer from '@/components/layout/footer.layout'
import HotelDetails from './hotel-details'
import { SignInPage, SignUpPage } from './auth'
import SearchPage from './search'


const App = () => {
  return (
    <div>
      
        <Header />
        {/* <Home /> */}
        {/* <HotelDetails /> */}
        <SearchPage />
       {/* <SignInPage /> */}
       {/* <SignUpPage /> */}
        <Footer/>
    </div>
      
  )
}

export default App