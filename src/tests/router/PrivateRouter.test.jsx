import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth/context/AuthContext";
import { PrivateRouter } from "../../router/PrivateRouter";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el PrivateRouter', () => { 
    test('should first', () => { 

        Storage.prototype.setItem = jest.fn()



        const contextValue = {
            logged:true,
            user:{
                id:'abc',
                name:'Laura Cortez'

            }
        }
        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/search?q=batman']}>
            <PrivateRouter>
                <h1>Ruta privada</h1>
            </PrivateRouter>
            </MemoryRouter>
            </AuthContext.Provider>)
     expect(screen.getByText('Ruta privada') ).toBeTruthy();
     expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/search?q=batman')
     })
 })