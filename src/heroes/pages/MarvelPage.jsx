import React from 'react'
import { HeroeList } from '../componentes/HeroeList'

export const MarvelPage = () => {
  return (
    <>
    <h1>Marvel comics</h1>
    <hr />
    <HeroeList publisher={'Marvel Comics'}/>

    </>
  )
}
