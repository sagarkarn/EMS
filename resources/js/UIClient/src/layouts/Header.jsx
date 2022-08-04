import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState("");

    const path = window.location.pathname;
    if (path != activeLink) {
        setActiveLink(path);
    }

    return (
        <>
            <div id="loader-wrapper">
                <div className="loader">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <header className="header">
                <div className="top-header-section">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                                <div className="logo my-3 my-sm-0">
                                    <a href="index.html">
                                        <img
                                            src="assets/img/logo.png"
                                            alt="logo image"
                                            className="img-fluid"
                                            width="100"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-6 text-right">
                                <div className="user-block d-none d-lg-block">
                                    <div className="row align-items-center">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="user-notification-block align-right d-inline-block">
                                                <div className="top-nav-search item-animated">
                                                    <form>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Search here"
                                                        />
                                                        <button
                                                            className="btn"
                                                            type="submit"
                                                        >
                                                            <i className="fa fa-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="user-notification-block align-right d-inline-block">
                                                <ul className="list-inline m-0">
                                                    <li
                                                        className="list-inline-item item-animated"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        data-original-title="Apply Leave"
                                                    >
                                                        <a
                                                            href="leave.html"
                                                            className="font-23 menu-style text-white align-middle"
                                                        >
                                                            <span className="lnr lnr-briefcase position-relative"></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="user-info align-right dropdown d-inline-block header-dropdown">
                                                <a
                                                    href="javascript:void(0)"
                                                    data-toggle="dropdown"
                                                    className=" menu-style dropdown-toggle"
                                                >
                                                    <div className="user-avatar d-inline-block">
                                                        <img
                                                            src="assets/img/profiles/img-6.jpg"
                                                            alt="user avatar"
                                                            className="rounded-circle img-fluid"
                                                            width="55"
                                                        />
                                                    </div>
                                                </a>

                                                <div className="dropdown-menu notification-dropdown-menu shadow-lg border-0 p-3 m-0 dropdown-menu-right">
                                                    <a
                                                        className="dropdown-item p-2"
                                                        href="employment.html"
                                                    >
                                                        <span className="media align-items-center">
                                                            <span className="lnr lnr-user mr-3"></span>
                                                            <span className="media-body text-truncate">
                                                                <span className="text-truncate">
                                                                    Profile
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <a
                                                        className="dropdown-item p-2"
                                                        href="profile-settings.html"
                                                    >
                                                        <span className="media align-items-center">
                                                            <span className="lnr lnr-cog mr-3"></span>
                                                            <span className="media-body text-truncate">
                                                                <span className="text-truncate">
                                                                    Settings
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <Link
                                                        className="dropdown-item p-2"
                                                        to={"/login"}
                                                    >
                                                        <span className="media align-items-center">
                                                            <span className="lnr lnr-power-switch mr-3"></span>
                                                            <span className="media-body text-truncate">
                                                                <span className="text-truncate">
                                                                    Logout
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block d-lg-none">
                                    <a href="javascript:void(0)">
                                        <span
                                            className="lnr lnr-user d-block display-5 text-white"
                                            id="open_navSidebar"
                                        ></span>
                                    </a>

                                    <div
                                        className="offcanvas-menu"
                                        id="offcanvas_menu"
                                    >
                                        <span
                                            className="lnr lnr-cross float-left display-6 position-absolute t-1 l-1 text-white"
                                            id="close_navSidebar"
                                        ></span>
                                        <div className="user-info align-center bg-theme text-center">
                                            <a
                                                href="javascript:void(0)"
                                                className="d-block menu-style text-white"
                                            >
                                                <div className="user-avatar d-inline-block mr-3">
                                                    <img
                                                        src="assets/img/profiles/img-6.jpg"
                                                        alt="user avatar"
                                                        className="rounded-circle"
                                                        width="50"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="user-notification-block align-center">
                                            <div className="top-nav-search item-animated">
                                                <form>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search here"
                                                    />
                                                    <button
                                                        className="btn"
                                                        type="submit"
                                                    >
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="user-menu-items px-3 m-0">
                                            <a
                                                className="px-0 pb-2 pt-0"
                                                href="index.html"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-home mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Dashboard
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                            <Link
                                                to={"/employee"}
                                                className="p-2"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-users mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Employees
                                                        </span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <a
                                                className="p-2"
                                                href="company.html"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-apartment mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Company
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                            <a
                                                className="p-2"
                                                href="calendar.html"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-calendar-full mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Calendar
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                            <a
                                                className="p-2"
                                                href="leave.html"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-briefcase mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Leave
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                            <a
                                                className="p-2"
                                                href="reviews.html"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-star mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Reviews
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                            <a
                                                className="p-2"
                                                href="reports.html"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-rocket mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Reports
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                            <a
                                                className="p-2"
                                                href="manage.html"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-sync mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Manage
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                            <a
                                                className="p-2"
                                                href="settings.html"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-cog mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Settings
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                            <a
                                                className="p-2"
                                                href="employment.html"
                                            >
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-user mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Profile
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                            <a className="p-2" href="#">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-power-switch mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">
                                                            Logout
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-wrapper d-none d-sm-none d-md-none d-lg-block">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-menu-list d-flex bg-white rt_nav_header horizontal-layout nav-bottom">
                                    <div className="append my-0 my-md-0 mr-auto">
                                        <ul className="list-group list-group-horizontal-md mr-auto">
                                            <li
                                                className={`mr-1 ${
                                                    activeLink == "/" ||
                                                    activeLink == ""
                                                        ? "active text-white"
                                                        : "text-dark"
                                                }`}
                                            >
                                                <Link
                                                    to={"/"}
                                                    className="btn-ctm-space"
                                                    onClick={() =>
                                                        setActiveLink("/")
                                                    }
                                                >
                                                    <span className="lnr lnr-home pr-0 pr-lg-2"></span>
                                                    <span className="d-none d-lg-inline">
                                                        Dashboard
                                                    </span>
                                                </Link>
                                            </li>
                                            <li
                                                className={`mr-1 ${
                                                    activeLink.startsWith(
                                                        "/employee"
                                                    )
                                                        ? "active text-white"
                                                        : "text-dark"
                                                }`}
                                            >
                                                <Link
                                                    to={"/employee"}
                                                    className={`btn-ctm-space `}
                                                    onClick={() =>
                                                        setActiveLink(
                                                            "/employee"
                                                        )
                                                    }
                                                >
                                                    <span className="lnr lnr-users pr-0 pr-lg-2"></span>
                                                    <span className="d-none d-lg-inline">
                                                        Employees
                                                    </span>
                                                </Link>
                                            </li>
                                            <li
                                                className={`mr-1 ${
                                                    activeLink.startsWith(
                                                        "/company"
                                                    )
                                                        ? "active text-white"
                                                        : "text-dark"
                                                }`}
                                            >
                                                <Link
                                                    className="btn-ctm-space "
                                                    to="/company"
                                                    onClick={() =>
                                                        setActiveLink(
                                                            "/company"
                                                        )
                                                    }
                                                >
                                                    <span className="lnr lnr-apartment pr-0 pr-lg-2"></span>
                                                    <span className="d-none d-lg-inline">
                                                        Company
                                                    </span>
                                                </Link>
                                            </li>
                                            <li
                                                className={`mr-1 ${
                                                    activeLink.startsWith(
                                                        "/calendar"
                                                    )
                                                        ? "active text-white"
                                                        : "text-dark"
                                                }`}
                                            >
                                                <Link
                                                    className="btn-ctm-space"
                                                    to={"calendar"}
                                                    onClick={() =>
                                                        setActiveLink(
                                                            "/calendar"
                                                        )
                                                    }
                                                >
                                                    <span className="lnr lnr-calendar-full pr-0 pr-lg-2"></span>
                                                    <span className="d-none d-lg-inline">
                                                        Calendar
                                                    </span>
                                                </Link>
                                            </li>
                                            <li
                                                className={`mr-1 ${
                                                    activeLink.startsWith(
                                                        "/leave"
                                                    )
                                                        ? "active text-white"
                                                        : "text-dark"
                                                }`}
                                            >
                                                <Link
                                                    className="btn-ctm-space "
                                                    to={"leave"}
                                                    onClick={() =>
                                                        setActiveLink("/leave")
                                                    }
                                                >
                                                    <span className="lnr lnr-briefcase pr-0 pr-lg-2"></span>
                                                    <span className="d-none d-lg-inline">
                                                        Leave
                                                    </span>
                                                </Link>
                                            </li>
                                            <li
                                                className={`mr-1 ${
                                                    activeLink.startsWith(
                                                        "/review"
                                                    )
                                                        ? "active text-white"
                                                        : "text-dark"
                                                }`}
                                            >
                                                <Link
                                                    className="btn-ctm-space"
                                                    to={"/review"}
                                                    onClick={() =>
                                                        setActiveLink("/review")
                                                    }
                                                >
                                                    <span className="lnr lnr-star pr-0 pr-lg-2"></span>
                                                    <span className="d-none d-lg-inline">
                                                        Reviews
                                                    </span>
                                                </Link>
                                            </li>
                                            <li
                                                className={`mr-1 ${
                                                    activeLink.startsWith(
                                                        "/report"
                                                    )
                                                        ? "active text-white"
                                                        : "text-dark"
                                                }`}
                                            >
                                                <Link
                                                    className="btn-ctm-space "
                                                    to={"/report"}
                                                    onClick={() =>
                                                        setActiveLink("/report")
                                                    }
                                                >
                                                    <span className="lnr lnr-rocket pr-0 pr-lg-2"></span>
                                                    <span className="d-none d-lg-inline">
                                                        Reports
                                                    </span>
                                                </Link>
                                            </li>
                                            <li
                                                className={`mr-1 ${
                                                    activeLink.startsWith(
                                                        "/manage"
                                                    )
                                                        ? "active text-white"
                                                        : "text-dark"
                                                }`}
                                            >
                                                <Link
                                                    className="btn-ctm-space "
                                                    to={"/manage"}
                                                    onClick={() =>
                                                        setActiveLink("/manage")
                                                    }
                                                >
                                                    <span className="lnr lnr-sync pr-0 pr-lg-2"></span>
                                                    <span className="d-none d-lg-inline">
                                                        Manage
                                                    </span>
                                                </Link>
                                            </li>
                                            <li
                                                className={`mr-1 ${
                                                    activeLink.startsWith(
                                                        "/setting"
                                                    )
                                                        ? "active text-white"
                                                        : "text-dark"
                                                }`}
                                            >
                                                <Link
                                                    className="btn-ctm-space"
                                                    to={"/setting"}
                                                    onClick={() =>
                                                        setActiveLink(
                                                            "/setting"
                                                        )
                                                    }
                                                >
                                                    <span className="lnr lnr-cog pr-0 pr-lg-2"></span>
                                                    <span className="d-none d-lg-inline">
                                                        Settings
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
