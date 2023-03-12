import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/home/auth/login.page";
import RegisterPage from "../pages/home/auth/register.page";
import HomePageLayout from "../pages/layout/home-page.layout";

const Routing = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageLayout />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />


                <Route path="*" element={<>404 Not found</>} />
            </Routes>
        </BrowserRouter>
    </>)
}
export default Routing;