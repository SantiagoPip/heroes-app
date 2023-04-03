import React from 'react'
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { DCPage } from '../heroes/pages/DCPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { Navbar } from '../ui';
import { HeroesRoutes } from '../heroes';
export const AppRouter = ()=>{
    return (
        <>
            <Routes>
               
                <Route path = "login" element = {<LoginPage/>}></Route>
                <Route path = "/*" element = {<HeroesRoutes/>}></Route>

            </Routes>
        </>
    )
}
  
