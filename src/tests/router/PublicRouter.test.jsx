import { render, screen } from "@testing-library/react"
import { PublicRouter } from "../../router/PublicRouter"
import { AuthContext } from "../../auth/context/AuthContext"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en el <PublicRouter/>', () => { 
    test('Debe de mostrar el hildren si no esta autenticado', () => { 
        const contextValue = {
            logged:false
        }
        render(<AuthContext.Provider value={contextValue}>
            <PublicRouter>
                <h1>Ruta publica</h1>
            </PublicRouter>
            </AuthContext.Provider>)
     expect(screen.getByText('Ruta publica') ).toBeTruthy();
     })
     test('Debe de navegar si esta autenticado', () => { 
        const contextValue = {
            logged:true,
            user:{
                name:'Camila',
                id:'ABC123'
            }
        }
        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="login" element = {
                        <PublicRouter>
                            <h1>Ruta publica</h1>
                        </PublicRouter>
                    }/>
                    <Route path = 'marvel' element={<h1>Pagina Marvel</h1>}/>
                </Routes>
           
            </MemoryRouter>
            </AuthContext.Provider>);
            screen.debug();
            expect(screen.getByText('Pagina Marvel')).toBeTruthy();
        

      })
 })