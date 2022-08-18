import React, { useEffect, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import UserRepo from "../services/UserRepo";
import BasicDetails from "./add-components/BasicDetails";
import EmploymentDetails from "./add-components/EmploymentDetails";
import SaleryDetails from "./add-components/SaleryDetails";
import Teams from "./add-components/Teams";

function EmpAdd() {
    const [error, setError] = useState({});
    const options = {
        position: "top-right",
    };
    const [openSnackbar, closeSnackbar] = useSnackbar(options);

    const submitForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());

        UserRepo.createUser(value)
            .then((res) => {
                if (res[0] == 422) {
                    openSnackbar("snack bar open");
                } else if (res[0] == 201) {
                    openSnackbar(res[1]["message"]);
                    event.target.reset();
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <aside className="sidebar sidebar-user">
                                <div className="card ctm-border-radius shadow-sm">
                                    <div className="card-body py-4">
                                        <div className="row">
                                            <div className="col-md-12 mr-auto text-left">
                                                <div className="custom-search input-group">
                                                    <div className="custom-breadcrumb">
                                                        <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                                            <li className="breadcrumb-item d-inline-block">
                                                                <a
                                                                    href="index.html"
                                                                    className="text-dark"
                                                                >
                                                                    Home
                                                                </a>
                                                            </li>
                                                            <li className="breadcrumb-item d-inline-block active">
                                                                Employees
                                                            </li>
                                                        </ol>
                                                        <h4 className="text-dark">
                                                            Add Person
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card ctm-border-radius shadow-sm">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">
                                            Details Content
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        <div
                                            id="list-example"
                                            className="list-group border-none"
                                        >
                                            <a
                                                className="list-group-item list-group-item-action border-none"
                                                href="javascript:void(0)"
                                            >
                                                Basic
                                            </a>
                                            <a
                                                className="list-group-item list-group-item-action border-none"
                                                href="javascript:void(0)"
                                            >
                                                Employment
                                            </a>
                                            <a
                                                className="list-group-item list-group-item-action border-none"
                                                href="javascript:void(0)"
                                            >
                                                Teams &amp; Offices
                                            </a>
                                            <a
                                                className="list-group-item list-group-item-action border-none"
                                                href="javascript:void(0)"
                                            >
                                                Salary
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-xl-9 col-lg-8  col-md-12">
                            <form onSubmit={submitForm}>
                                <div
                                    className="accordion add-employee"
                                    id="accordion-details"
                                >
                                    <BasicDetails error={error} />
                                    <EmploymentDetails error={error} />
                                    <Teams error={error} />
                                    <SaleryDetails error={error} />
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="submit-section text-center btn-add">
                                            <button className="btn btn-theme text-white ctm-border-radius button-1">
                                                Add Team Member
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmpAdd;
