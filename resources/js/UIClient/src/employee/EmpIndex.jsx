import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import UserRepo from "../services/UserRepo";
import Sidebar from "./component/Sidebar";
import EmpList from "./EmpList";

function EmpIndex() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        UserRepo.users()
            .then((res) => {
                setUsers(res);
                console.log(res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar active={"home"} />
                    </div>
                    <div className="col-xl-9 col-lg-8  col-md-12">
                        <div className="card shadow-sm ctm-border-radius">
                            <div className="card-body align-center">
                                <h4 className="card-title float-left mb-0 mt-2">
                                    {users.length} users
                                </h4>
                                <ul className="nav nav-tabs float-right border-0 tab-list-emp">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link active border-0 font-23 grid-view"
                                            to={"/employee"}
                                        >
                                            <i
                                                className="fa fa-th-large"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link border-0 font-23 list-view"
                                            to={"/employee/list"}
                                        >
                                            <i
                                                className="fa fa-list-ul"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item pl-3">
                                        <Link
                                            to={"/employee/add"}
                                            className="btn btn-theme button-1 text-white ctm-border-radius p-2 add-person ctm-btn-padding"
                                        >
                                            <i className="fa fa-plus"></i> Add
                                            Person
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctm-border-radius shadow-sm card">
                            <div className="card-body">
                                <div className="row people-grid-row">
                                    {users.map((user, index) => {
                                        return (
                                            <div className="col-md-6 col-lg-6 col-xl-4">
                                                <div className="card widget-profile">
                                                    <div className="card-body">
                                                        <div className="pro-widget-content text-center">
                                                            <div className="profile-info-widget">
                                                                <a
                                                                    href="employment.html"
                                                                    className="booking-doc-img"
                                                                >
                                                                    <img
                                                                        src="assets/img/profiles/img-6.jpg"
                                                                        alt="User Image"
                                                                    />
                                                                </a>
                                                                <div className="profile-det-info">
                                                                    <h4>
                                                                        <a
                                                                            href="employment.html"
                                                                            className="text-primary"
                                                                        >
                                                                            {
                                                                                user.name
                                                                            }
                                                                        </a>
                                                                    </h4>
                                                                    <div>
                                                                        <p className="mb-0">
                                                                            <b>
                                                                                {
                                                                                    user
                                                                                        ?.employee
                                                                                        ?.job_title
                                                                                }
                                                                            </b>
                                                                        </p>
                                                                        <p className="mb-0 ctm-text-sm">
                                                                            <a
                                                                                href={
                                                                                    "mailto:" +
                                                                                    user.email
                                                                                }
                                                                                className="__cf_email__"
                                                                            >
                                                                                {
                                                                                    user.email
                                                                                }
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmpIndex;
