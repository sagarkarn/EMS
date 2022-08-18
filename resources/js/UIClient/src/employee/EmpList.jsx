import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserRepo from "../services/UserRepo";
import Sidebar from "./component/Sidebar";

function EmpList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        UserRepo.users()
            .then((res) => {
                setUsers(res);
                console.log(res);
            })
            .catch((err) => console.log(err));
    }, []);

    const TableRow = ({ user }) => {
        return (
            <tr>
                <td>
                    <a href="employment.html" class="avatar">
                        <img
                            alt="avatar image"
                            src="assets/img/profiles/img-5.jpg"
                            class="img-fluid"
                        />
                    </a>
                    <h2>
                        <a href="employment.html">{user.name}</a>
                    </h2>
                </td>
                <td>
                    <a class="btn btn-outline-success btn-sm"></a>
                </td>
                <td>
                    <a class="btn btn-outline-warning btn-sm">Design</a>
                </td>
                <td>Focus Technologies</td>
                <td>Team Lead</td>
                <td>
                    <div class="dropdown action-label drop-active">
                        <a
                            href="javascript:void(0)"
                            class="btn btn-white btn-sm dropdown-toggle"
                            data-toggle="dropdown"
                        >
                            Active <i class="caret"></i>
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)">
                                Active
                            </a>
                            <a class="dropdown-item" href="javascript:void(0)">
                                Inactive
                            </a>
                            <a class="dropdown-item" href="javascript:void(0)">
                                Invited
                            </a>
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar />
                    </div>
                    <div class="col-xl-9 col-lg-8 col-md-12">
                        <div class="card shadow-sm ctm-border-radius">
                            <div class="card-body align-center">
                                <h4 class="card-title float-left mb-0 mt-2">
                                    {users.length}
                                </h4>
                                <ul className="nav nav-tabs float-right border-0 tab-list-emp">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link border-0 font-23 grid-view"
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
                                            className="nav-link active border-0 font-23 list-view"
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
                        <div class="ctm-border-radius shadow-sm card">
                            <div class="card-body">
                                <div class="table-back employee-office-table">
                                    <div class="table-responsive">
                                        <table class="table custom-table table-hover table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Line Manager</th>
                                                    <th>Team</th>
                                                    <th>Office</th>
                                                    <th>Permissions</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((user) => {
                                                    return (
                                                        <TableRow user={user} />
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmpList;
