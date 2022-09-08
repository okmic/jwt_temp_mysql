import { Route, Routes } from "react-router-dom"
import SigninPage from "../pages/SigninPage"



export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return <Routes>
            <Route path="/*" element={<h1>Is not aut</h1>} />
        </Routes>
    } 
    return <Routes>
        <Route path='/*' element={<SigninPage />} />
    </Routes>
}