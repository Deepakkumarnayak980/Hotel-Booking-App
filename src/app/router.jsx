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
import { PATHS } from '@/config/path.config'

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path={PATHS.SEARCH} element={ <SearchPage />} />
        <Route path={PATHS.HOTEL}element={<HotelDetails />} />

        <Route path={PATHS.SIGNUP} element={<SignUpPage />} />
        <Route path={PATHS.SIGNIN} element={<SignInPage />} />

        
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default Router