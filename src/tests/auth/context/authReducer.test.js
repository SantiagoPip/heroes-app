import { authReducer } from "../../../auth/context/authReducer"
import { types } from "../../../auth/types/types"

describe('first', () => { 


    test('Debe regresar un estado por defecto', () => { 
        const state = authReducer({logged:false},{})
        console.log(state)
        expect(state).toEqual({logged:false})
     })
     test('Debe llamar al login y authenticar el usuario', () => { 
        const action ={type: types.login,
        payload:{
            name:'Tatiana',
            id:'123'
        }
        }
        const state = authReducer({logged:false},action);
        expect(state).toEqual({
            logged:true,
            user:action.payload
        })
      })
    test('debe de (logout) borrar el name del usuario y logged false', () => { 
        const state = {
            logged:true,
            user:{id:123,name:'Ari'}

        }
        const action = {type:types.logout}
        const newState = authReducer(state,action)
        expect(newState).toEqual({logged:false})
     })
 })