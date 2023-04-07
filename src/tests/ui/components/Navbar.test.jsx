import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/context/AuthContext";
import { Navbar } from "../../../ui/components/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
const mockedUseNavigate = jest.fn()
jest.mock("react-router-dom",()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockedUseNavigate
}))
describe('Preubas en el <Navbar/>', () => { 
    const contextValue ={
        logged:true,
        user:{
            name:'Laura Cortez'
        },
        logout:jest.fn()
    }
    beforeEach(()=>jest.clearAllMocks())
    test('Debe de mostrar el nombre del usuario', () => { 
        render(<AuthContext.Provider value = {contextValue}>
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        </AuthContext.Provider>)
     screen.debug()
     expect(screen.getByText('Laura Cortez')).toBeTruthy()
     });

     test('debe de llamar el logout y navigate cuando hace click en el boton', () => { 

        render(<AuthContext.Provider value = {contextValue}>
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        </AuthContext.Provider>)
        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn)
        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login",{"replace":true})
      })
 })