import { Route, Routes } from "react-router-dom"
import ProfilePage from "../pages/ProfilePage"
import SigninPage from "../pages/SigninPage"
import SignupPage from "../pages/SignupPage"

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return <Routes>
            <Route path="/*" element={<ProfilePage />} />
        </Routes>
    } 
    return <Routes>
        <Route path='/*' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
    </Routes>
}