import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './home'
import SearchPage from './search'
import HotelDetails from './hotel-details'
import Header from '@/components/layout/header.layout'
import Footer from '@/components/layout/footer.layout'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import { SignInPage, SignUpPage } from './auth'

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={ <SearchPage />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default Router