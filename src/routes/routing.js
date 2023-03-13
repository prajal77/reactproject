import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../pages/admin/admin-page.layout";
import AdminDashboard from "../pages/admin/dashboard.page";
import LoginPage from "../pages/home/auth/login.page";
import RegisterPage from "../pages/home/auth/register.page";
import BrandDetail from "../pages/home/brand/brand-detail.page";
import HomePageLayout from "../pages/layout/home-page.layout";

const Routing = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageLayout />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/brand/:slug" element={<BrandDetail />} ></Route>

                <Route path="*" element={<>404 Not found</>} />

                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<AdminDashboard />}></Route>
                    <Route path="profile" element={<> Admin profile  </>}></Route>
                </Route>
            </Routes>

        </BrowserRouter >
    </>)
}
export default Routing;