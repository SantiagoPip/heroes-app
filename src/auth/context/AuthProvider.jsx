import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'
const initialState = {
    logged:false
}

export const AuthProvider = ({children}) => {
  const init = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    return {
      logged:!!user,
      user:user
    }
  
  }
   const [state,dispatch] =  useReducer(authReducer,initialState,init)

   const onLogin = (name = '')=>{
    const user = {id:'ABC',name}
    const action = {
      type:types.login,
      payload:user
    }
    localStorage.setItem('user',JSON.stringify(user))
    dispatch(action)
   }
   const onLogOut =()=>{
      localStorage.removeItem('user');
      const action = {
        type:types.logout,

      }
      dispatch(action)
   }

  return (
    <AuthContext.Provider value={{
      ...state,
      //Methods
      login:onLogin,
      logout:onLogOut
    }}>
        {children}
    </AuthContext.Provider>
  )
}
