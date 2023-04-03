import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DCPage,  HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Routes>
                <Route path = "marvel" element = {<MarvelPage/>}></Route>
                <Route path = "dc" element = {<DCPage/>}></Route>
                <Route path = "search" element = {<SearchPage/>}></Route>
                <Route path = "hero" element = {<HeroPage/>}></Route>
                <Route path = "/" element={<Navigate to = "/marvel"/>}></Route>
    </Routes>
    </div>
    
    </>

  )
}
