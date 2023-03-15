import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../pages/admin/admin-page.layout";
import AdminDashboard from "../pages/admin/dashboard.page";
import LoginPage from "../pages/home/auth/login.page";
import RegisterPage from "../pages/home/auth/register.page";
import BrandDetail from "../pages/home/brand/brand-detail.page";
import HomePage from "../pages/home/home.page";
import HomePageLayout from "../pages/layout/home-page.layout";

const Routing = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageLayout />} >
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" elem ent={<RegisterPage />} />

                    <Route path="/brand/:slug" element={<BrandDetail />} ></Route>
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />}></Route>
                    <Route path="profile" element={<> Admin profile  </>}></Route>
                </Route>

                <Route path="/seller" element={<AdminLayout />}>
                    <Route index element={<>Seller Dashboard</>} />
                </Route>

                <Route path="/customer" element={<AdminLayout />}>
                    <Route index element={<>Customer Dashboard</>} />
                </Route>

                <Route path="*" element={<>404 Not found</>} />
            </Routes>

        </BrowserRouter >
    </>)
}
export default Routing;