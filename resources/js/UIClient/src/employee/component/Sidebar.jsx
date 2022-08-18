import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ active }) {
    let activeClasses =
        "list-group-item text-center active button-5 text-white";
    let nonActiveClasses = "list-group-item text-center button-6";

    return (
        <aside className="sidebar sidebar-user">
            <div className="card ctm-border-radius shadow-sm">
                <div className="card-body py-4">
                    <div className="row">
                        <div className="col-md-12 mr-auto text-left">
                            <div className="custom-search input-group">
                                <div className="custom-breadcrumb">
                                    <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                        <li className="breadcrumb-item d-inline-block">
                                            <Link
                                                to={"/"}
                                                className="text-dark"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item d-inline-block active">
                                            Employees
                                        </li>
                                    </ol>
                                    <h4 className="text-dark">Employees</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                <div className="card-body">
                    <ul className="list-group">
                        <li
                            className={
                                active == "home"
                                    ? activeClasses
                                    : nonActiveClasses
                            }
                        >
                            <Link to={"/employee"}>All</Link>
                        </li>
                        <li
                            className={
                                active == "team"
                                    ? activeClasses
                                    : nonActiveClasses
                            }
                        >
                            <Link to={"/teams"}>Teams</Link>
                        </li>
                        <li
                            className={
                                active == "office"
                                    ? activeClasses
                                    : nonActiveClasses
                            }
                        >
                            <Link to={"/offices"}>Offices</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
