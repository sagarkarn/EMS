import React from "react";

function EmpAdd() {
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
                                                Teams & Offices
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
                            <div
                                className="accordion add-employee"
                                id="accordion-details"
                            >
                                <div className="card shadow-sm ctm-border-radius">
                                    <div className="card-header" id="basic1">
                                        <h4 className="cursor-pointer mb-0">
                                            <a
                                                className=" coll-arrow d-block text-dark"
                                                href="javascript:void(0)"
                                                data-toggle="collapse"
                                                data-target="#basic-one"
                                                aria-expanded="true"
                                            >
                                                Basic Details
                                                <br />
                                                <span className="ctm-text-sm">
                                                    Organized and secure.
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <div
                                            id="basic-one"
                                            className="collapse show ctm-padding"
                                            aria-labelledby="basic1"
                                            data-parent="#accordion-details"
                                        >
                                            <form>
                                                <div className="row">
                                                    <div className="col form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div className="col form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className=" custom-control custom-checkbox mb-0">
                                                            <input
                                                                type="checkbox"
                                                                id="send-email"
                                                                name="send-email"
                                                                className="custom-control-input"
                                                            />
                                                            <label
                                                                className="mb-0 custom-control-label"
                                                                for="send-email"
                                                            >
                                                                Send them an
                                                                invite email so
                                                                they can log in
                                                                immediately
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-sm ctm-border-radius">
                                    <div
                                        className="card-header"
                                        id="headingTwo"
                                    >
                                        <h4 className="cursor-pointer mb-0">
                                            <a
                                                className="coll-arrow d-block text-dark"
                                                href="javascript:void(0)"
                                                data-toggle="collapse"
                                                data-target="#employee-det"
                                            >
                                                Employment Details
                                                <br />
                                                <span className="ctm-text-sm">
                                                    Let everyone know the
                                                    essentials so they're fully
                                                    prepared.
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <div
                                            id="employee-det"
                                            className="collapse show ctm-padding"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordion-details"
                                        >
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-12 form-group">
                                                        <select className="form-control select">
                                                            <option selected>
                                                                Country of
                                                                Employment{" "}
                                                            </option>
                                                            <option value="1">
                                                                country1
                                                            </option>
                                                            <option value="2">
                                                                country2
                                                            </option>
                                                            <option value="3">
                                                                country3
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-12 form-group">
                                                        <div className="cal-icon">
                                                            <input
                                                                className="form-control datetimepicker cal-icon-input"
                                                                type="text"
                                                                placeholder="Start Date"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Job Title"
                                                        />
                                                    </div>
                                                    <div className="col-12 form-group mb-0">
                                                        <p className="mb-2">
                                                            Employment Type
                                                        </p>
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                id="Permanent"
                                                                name="Permanent"
                                                                checked
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                for="Permanent"
                                                            >
                                                                Permanent
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                id="Freelancer"
                                                                name="Permanent"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                for="Freelancer"
                                                            >
                                                                Freelancer
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-sm ctm-border-radius">
                                    <div
                                        className="card-header"
                                        id="headingThree"
                                    >
                                        <h4 className="cursor-pointer mb-0">
                                            <a
                                                className="coll-arrow d-block text-dark"
                                                href="javascript:void(0)"
                                                data-toggle="collapse"
                                                data-target="#term-office"
                                            >
                                                Teams and Offices
                                                <br />
                                                <span className="ctm-text-sm">
                                                    Keep things tidy — and save
                                                    time setting approvers and
                                                    public holidays.
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <div
                                            id="term-office"
                                            className="collapse show ctm-padding"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordion-details"
                                        >
                                            <div className="row">
                                                <div className="col-md-12 form-group">
                                                    <select className="form-control select">
                                                        <option selected>
                                                            Teams{" "}
                                                        </option>
                                                        <option value="1">
                                                            PHP
                                                        </option>
                                                        <option value="2">
                                                            Android
                                                        </option>
                                                        <option value="3">
                                                            Testing
                                                        </option>
                                                        <option value="3">
                                                            Designing
                                                        </option>
                                                        <option value="3">
                                                            IOS
                                                        </option>
                                                        <option value="3">
                                                            Business
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <select className="form-control select">
                                                        <option selected>
                                                            Line Manager
                                                        </option>
                                                        <option value="1">
                                                            Robert Wilson
                                                        </option>
                                                        <option value="2">
                                                            Maria Cotton
                                                        </option>
                                                        <option value="3">
                                                            Danny Ward
                                                        </option>
                                                        <option value="4">
                                                            Linda Craver
                                                        </option>
                                                        <option value="5">
                                                            Jenni Sims
                                                        </option>
                                                        <option value="6">
                                                            John Gibbs
                                                        </option>
                                                        <option value="7">
                                                            Stacey Linville
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="col-12 form-group mb-0">
                                                    <select className="form-control select">
                                                        <option selected>
                                                            Office Name
                                                        </option>
                                                        <option value="1">
                                                            Focus Technology
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-sm ctm-border-radius">
                                    <div
                                        className="card-header"
                                        id="headingFour"
                                    >
                                        <h4 className="cursor-pointer mb-0">
                                            <a
                                                className="coll-arrow d-block text-dark"
                                                href="javascript:void(0)"
                                                data-toggle="collapse"
                                                data-target="#salary_det"
                                            >
                                                Salary Details
                                                <br />
                                                <span className="ctm-text-sm">
                                                    Stored securely, only
                                                    visible to Super Admins,
                                                    Payroll Admins, and
                                                    themselves.
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <div
                                            id="salary_det"
                                            className="collapse show ctm-padding"
                                            aria-labelledby="headingFour"
                                            data-parent="#accordion-details"
                                        >
                                            <div className="row">
                                                <div className="col-md-12 form-group">
                                                    <select className="form-control select">
                                                        <option selected>
                                                            Currency{" "}
                                                        </option>
                                                        <option value="1">
                                                            $
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Amount"
                                                    />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <select className="form-control select">
                                                        <option selected>
                                                            Frequency
                                                        </option>
                                                        <option value="1">
                                                            Annualy
                                                        </option>
                                                        <option value="2">
                                                            Monthly
                                                        </option>
                                                        <option value="3">
                                                            Weekly
                                                        </option>
                                                        <option value="4">
                                                            Daily
                                                        </option>
                                                        <option value="5">
                                                            Hourly
                                                        </option>
                                                        <option value="6">
                                                            Fixed
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 form-group mb-0">
                                                    <div className="cal-icon">
                                                        <input
                                                            className="form-control datetimepicker cal-icon-input"
                                                            type="date"
                                                            placeholder="Start Date"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmpAdd;
