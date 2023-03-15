
import NavbarComponent from "../../component/front/navbar.component";
import { Outlet } from "react-router-dom";

const HomePageLayout = () => {

    return (
        <>
            <NavbarComponent />
            <Outlet />
        </>
    )
}
export default HomePageLayout;