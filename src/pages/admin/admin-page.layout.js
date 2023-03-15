import { Outlet } from "react-router-dom";
import "../../assets/css/admin.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaBars, FaSearch, FaTachometerAlt, FaUser, } from "react-icons/fa";

const AdminLayout = () => {
    const toogleSidebar = (e) => {
        e.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
    };
    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3" href="index.html">
                    Start Bootstrap
                </a>
                <button
                    onClick={toogleSidebar}
                    className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                    id="sidebarToggle"
                    href="/"
                >
                    <FaBars />
                    {/* <i className="fas fa-bars"></i> */}
                </button>
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search for..."
                            aria-label="Search for..."
                            aria-describedby="btnNavbarSearch"
                        />
                        <button
                            className="btn btn-primary"
                            id="btnNavbarSearch"
                            type="button"
                        >
                            <FaSearch />
                            {/* <i className="fas fa-search"></i> */}
                        </button>
                    </div>
                </form>
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            href="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FaUser />
                            {/* <i className="fas fa-user fa-fw"></i> */}
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <a className="dropdown-item" href="/">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">
                                    Activity Log
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav
                        className="sb-sidenav accordion sb-sidenav-dark"
                        id="sidenavAccordion"
                    >
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <a className="nav-link" href="index.html">
                                    <div className="sb-nav-link-icon">
                                        <FaTachometerAlt />
                                        {/* <i className="fas fa-tachometer-alt"></i> */}
                                    </div>
                                    Dashboard
                                </a>

                                <div
                                    className="collapse"
                                    id="collapsePages"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="/sidenavAccordion"
                                >
                                    <nav
                                        className="sb-sidenav-menu-nested nav accordion"
                                        id="sidenavAccordionPages"
                                    >
                                        <a
                                            className="nav-link collapsed"
                                            href="/"
                                            data-bs-toggle="collapse"
                                            data-bs-target="/pagesCollapseAuth"
                                            aria-expanded="false"
                                            aria-controls="pagesCollapseAuth"
                                        >
                                            Authentication
                                            <div className="sb-sidenav-collapse-arrow">
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </a>
                                        <div
                                            className="collapse"
                                            id="pagesCollapseAuth"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="/sidenavAccordionPages"
                                        >
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" href="login.html">
                                                    Login
                                                </a>
                                                <a className="nav-link" href="register.html">
                                                    Register
                                                </a>
                                                <a className="nav-link" href="password.html">
                                                    Forgot Password
                                                </a>
                                            </nav>
                                        </div>
                                        <a
                                            className="nav-link collapsed"
                                            href="/"
                                            data-bs-toggle="collapse"
                                            data-bs-target="/pagesCollapseError"
                                            aria-expanded="false"
                                            aria-controls="pagesCollapseError"
                                        >
                                            Error
                                            <div className="sb-sidenav-collapse-arrow">
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </a>
                                        <div
                                            className="collapse"
                                            id="pagesCollapseError"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="/sidenavAccordionPages"
                                        >
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" href="401.html">
                                                    401 Page
                                                </a>
                                                <a className="nav-link" href="404.html">
                                                    404 Page
                                                </a>
                                                <a className="nav-link" href="500.html">
                                                    500 Page
                                                </a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Outlet />
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">
                                    Copyright &copy; Your Website 2022
                                </div>
                                <div>
                                    <a href="/">Privacy Policy</a>
                                    &middot;
                                    <a href="/">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
