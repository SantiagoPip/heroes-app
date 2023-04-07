import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"
import { AppRouter } from "../../router/AppRouter"
import { render,screen } from "@testing-library/react"


describe('Pruebas en el <AppRouter/>', () => { 
    test('Debe de mostrar el login si no esta autenticado', () => {
        const contextValue = {
            logged:false
        }
        render (
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>

            </MemoryRouter>
        )
        expect(screen.getAllByText('Login').length).toBe(2)
    })
    test('Debe de mostrar el componente de marvel si esta autenticado', () => { 
        const contextValue = {
            logged:true,
            user:{
                id:'ABC',
                name:'Paula Carreno'
            }
        }
        render(
            <MemoryRouter initialEntries={['/login']}>
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>

        </MemoryRouter>
        )
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)


     })
 })