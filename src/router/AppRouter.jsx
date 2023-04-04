import React from 'react'
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { DCPage } from '../heroes/pages/DCPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { Navbar } from '../ui';
import { HeroesRoutes } from '../heroes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
export const AppRouter = ()=>{
    return (
        <>
            <Routes>
                <Route path='/login' element = {
                    <PublicRouter>
                         <LoginPage/>
                    </PublicRouter>
                }
                
                />
               
                <Route path='/*' element = {
                    <PrivateRouter>
                        <HeroesRoutes/>
                    </PrivateRouter>
                }/>

            </Routes>
        </>
    )
}
  
