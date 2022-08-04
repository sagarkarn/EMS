import React from "react";

function Report() {
    return (
        <>
            <div class="page-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <aside class="sidebar sidebar-user">
                                <div class="card ctm-border-radius shadow-sm">
                                    <div class="card-body py-4">
                                        <div class="row">
                                            <div class="col-md-12 mr-auto text-left">
                                                <div class="custom-search input-group">
                                                    <div class="custom-breadcrumb">
                                                        <ol class="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                                            <li class="breadcrumb-item d-inline-block">
                                                                <a
                                                                    href="index.html"
                                                                    class="text-dark"
                                                                >
                                                                    Home
                                                                </a>
                                                            </li>
                                                            <li class="breadcrumb-item d-inline-block active">
                                                                Reports
                                                            </li>
                                                        </ol>
                                                        <h4 class="text-dark">
                                                            Reports
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card ctm-border-radius shadow-sm">
                                    <div class="card-body">
                                        <a
                                            href="javascript:void(0)"
                                            class="btn btn-theme button-1 ctm-border-radius text-white btn-block"
                                            data-toggle="modal"
                                            data-target="#add_report"
                                        >
                                            <span>
                                                <i class="fe fe-plus"></i>
                                            </span>{" "}
                                            Create Reports
                                        </a>
                                    </div>
                                </div>
                                <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                    <div class="card-body">
                                        <ul class="list-group">
                                            <li class="list-group-item text-center active">
                                                <a
                                                    href="reports.html"
                                                    class="text-white"
                                                >
                                                    Team Member Data
                                                </a>
                                            </li>
                                            <li class="list-group-item text-center">
                                                <a
                                                    class="text-dark"
                                                    href="leave-reports.html"
                                                >
                                                    Leave Data
                                                </a>
                                            </li>
                                            <li class="list-group-item text-center">
                                                <a
                                                    class="text-dark"
                                                    href="payroll-reports.html"
                                                >
                                                    Payroll Data
                                                </a>
                                            </li>
                                            <li class="list-group-item text-center">
                                                <a
                                                    class="text-dark"
                                                    href="contact-reports.html"
                                                >
                                                    Contact reports
                                                </a>
                                            </li>
                                            <li class="list-group-item text-center">
                                                <a
                                                    class="text-dark"
                                                    href="email-reports.html"
                                                >
                                                    Email Reports
                                                </a>
                                            </li>
                                            <li class="list-group-item text-center">
                                                <a
                                                    class="text-dark"
                                                    href="security-reports.html"
                                                >
                                                    Security Reports
                                                </a>
                                            </li>
                                            <li class="list-group-item text-center">
                                                <a
                                                    class="text-dark"
                                                    href="work-from-home-reports.html"
                                                >
                                                    Working From Home Reports
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div class="col-xl-9 col-lg-8  col-md-12">
                            <div class="card shadow-sm ctm-border-radius">
                                <div class="card-body align-center">
                                    <ul
                                        class="nav nav-pills"
                                        id="pills-tab"
                                        role="tablist"
                                    >
                                        <li class="nav-item mr-md-1">
                                            <a
                                                class="nav-link active"
                                                id="pills-home-tab"
                                                data-toggle="pill"
                                                href="#pills-home"
                                                role="tab"
                                                aria-controls="pills-home"
                                                aria-selected="true"
                                            >
                                                Team Member Official Reports
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                id="pills-profile-tab"
                                                data-toggle="pill"
                                                href="#pills-profile"
                                                role="tab"
                                                aria-controls="pills-profile"
                                                aria-selected="false"
                                            >
                                                Team Member Personal reports
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card shadow-sm ctm-border-radius">
                                <div class="card-body align-center">
                                    <div class="row filter-row">
                                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                            <div class="form-group mb-xl-0 mb-md-2 mb-sm-2">
                                                <select class="form-control select">
                                                    <option selected>
                                                        Start Date
                                                    </option>
                                                    <option>
                                                        Date Of Birth
                                                    </option>
                                                    <option>Created At</option>
                                                    <option>
                                                        Leaving Date
                                                    </option>
                                                    <option>
                                                        Visa Expiry Date
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                            <div class="form-group mb-lg-0 mb-md-2 mb-sm-2">
                                                <input
                                                    type="text"
                                                    class="form-control datetimepicker"
                                                    placeholder="From"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                            <div class="form-group mb-lg-0 mb-md-0 mb-sm-0">
                                                <input
                                                    type="text"
                                                    class="form-control datetimepicker"
                                                    placeholder="To"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                            <a
                                                href="#"
                                                class="btn btn-theme button-1 text-white btn-block p-2 mb-md-0 mb-sm-0 mb-lg-0 mb-0"
                                            >
                                                {" "}
                                                Apply Filter{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card shadow-sm ctm-border-radius">
                                <div class="card-body align-center">
                                    <div
                                        class="tab-content"
                                        id="pills-tabContent"
                                    >
                                        <div
                                            class="tab-pane fade show active"
                                            id="pills-home"
                                            role="tabpanel"
                                            aria-labelledby="pills-home-tab"
                                        >
                                            <div class="employee-office-table">
                                                <div class="table-responsive">
                                                    <table class="table custom-table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Active</th>
                                                                <th>
                                                                    Employment
                                                                </th>
                                                                <th>Email</th>
                                                                <th>
                                                                    Job title
                                                                </th>
                                                                <th>
                                                                    Line Manager
                                                                </th>
                                                                <th>
                                                                    Team name
                                                                </th>
                                                                <th>
                                                                    Start Date
                                                                </th>
                                                                <th>
                                                                    Company Name
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-5.jpg"
                                                                            class="img-fluid"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            Danny
                                                                            Ward
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div class="dropdown action-label drop-active">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            class="btn btn-white btn-sm dropdown-toggle"
                                                                            data-toggle="dropdown"
                                                                        >
                                                                            {" "}
                                                                            Active{" "}
                                                                            <i class="caret"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu">
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Active
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Inactive
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Invited
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    Permanent
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        class="__cf_email__"
                                                                        data-cfemail="593d3837202e382b3d193c21383429353c773a3634"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    Team Lead
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-success text-dark btn-sm">
                                                                        Richard
                                                                        Wilson
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-warning text-dark btn-sm">
                                                                        Designing
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    05 Jan 2019
                                                                </td>
                                                                <td>
                                                                    Focus
                                                                    Technologies
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            {" "}
                                                                            Linda
                                                                            Craver
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div class="dropdown action-label drop-active">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            class="btn btn-white btn-sm dropdown-toggle"
                                                                            data-toggle="dropdown"
                                                                        >
                                                                            {" "}
                                                                            Active{" "}
                                                                            <i class="caret"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu">
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Active
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Inactive
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Invited
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    Permanent
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        class="__cf_email__"
                                                                        data-cfemail="c9a5a0a7ada8aabba8bfacbb89acb1a8a4b9a5ace7aaa6a4"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    Team Lead
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-success text-dark btn-sm">
                                                                        Richard
                                                                        Wilson
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-warning text-dark btn-sm">
                                                                        IOS
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    07 Jun 2019
                                                                </td>
                                                                <td>
                                                                    Focus
                                                                    Technologies
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            Jenni
                                                                            Sims
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div class="dropdown action-label drop-active">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            class="btn btn-white btn-sm dropdown-toggle"
                                                                            data-toggle="dropdown"
                                                                        >
                                                                            {" "}
                                                                            Active{" "}
                                                                            <i class="caret"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu">
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Active
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Inactive
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Invited
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    Permanent
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        class="__cf_email__"
                                                                        data-cfemail="6b010e050502180206182b0e130a061b070e45080406"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    Team Lead
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-success text-dark btn-sm">
                                                                        Richard
                                                                        Wilson
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-warning text-dark btn-sm">
                                                                        Android
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    05 Apr 2019
                                                                </td>
                                                                <td>
                                                                    Focus
                                                                    Technologies
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-6.jpg"
                                                                            class="img-fluid"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            {" "}
                                                                            Maria
                                                                            Cotton
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div class="dropdown action-label drop-active">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            class="btn btn-white btn-sm dropdown-toggle"
                                                                            data-toggle="dropdown"
                                                                        >
                                                                            {" "}
                                                                            Active{" "}
                                                                            <i class="caret"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu">
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Active
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Inactive
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Invited
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    Permanent
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        class="__cf_email__"
                                                                        data-cfemail="9bf6fae9f2faf8f4efeff4f5dbfee3faf6ebf7feb5f8f4f6"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    Team Lead
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-success text-dark btn-sm">
                                                                        Richard
                                                                        Wilson
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-warning text-dark btn-sm">
                                                                        PHP{" "}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    05 Jan 2019
                                                                </td>
                                                                <td>
                                                                    Focus
                                                                    Technologies
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            {" "}
                                                                            John
                                                                            Gibbs
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div class="dropdown action-label drop-active">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            class="btn btn-white btn-sm dropdown-toggle"
                                                                            data-toggle="dropdown"
                                                                        >
                                                                            {" "}
                                                                            Active{" "}
                                                                            <i class="caret"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu">
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Active
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Inactive
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Invited
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    Permanent
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        class="__cf_email__"
                                                                        data-cfemail="68020700060c1a111b0c09040d280d10090518040d460b0705"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    Team Lead
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-success text-dark btn-sm">
                                                                        Richard
                                                                        Wilson
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-warning text-dark btn-sm">
                                                                        Business
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    12 Feb 2019
                                                                </td>
                                                                <td>
                                                                    Focus
                                                                    Technologies
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-10.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            {" "}
                                                                            Richard
                                                                            Wilson
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div class="dropdown action-label drop-active">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            class="btn btn-white btn-sm dropdown-toggle"
                                                                            data-toggle="dropdown"
                                                                        >
                                                                            {" "}
                                                                            Active{" "}
                                                                            <i class="caret"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu">
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Active
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Inactive
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Invited
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    Permanent
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        class="__cf_email__"
                                                                        data-cfemail="46342f252e273422312f2a35292806233e272b362a236825292b"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    Team Lead
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-danger text-dark btn-sm">
                                                                        No
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-warning text-dark btn-sm">
                                                                        Admin
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    05 Jan 2019
                                                                </td>
                                                                <td>
                                                                    Focus
                                                                    Technologies
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-8.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            {" "}
                                                                            Stacey
                                                                            Linville
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div class="dropdown action-label drop-active">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            class="btn btn-white btn-sm dropdown-toggle"
                                                                            data-toggle="dropdown"
                                                                        >
                                                                            {" "}
                                                                            Active{" "}
                                                                            <i class="caret"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu">
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Active
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Inactive
                                                                            </a>
                                                                            <a
                                                                                class="dropdown-item"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                {" "}
                                                                                Invited
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    Permanent
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        class="__cf_email__"
                                                                        data-cfemail="8bf8ffeae8eef2e7e2e5fde2e7e7eecbeef3eae6fbe7eea5e8e4e6"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    Team Lead
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-success text-dark btn-sm">
                                                                        Richard
                                                                        Wilson
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="btn btn-outline-warning text-dark btn-sm">
                                                                        Testing
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    05 Jan 2019
                                                                </td>
                                                                <td>
                                                                    Focus
                                                                    Technologies
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="tab-pane fade"
                                            id="pills-profile"
                                            role="tabpanel"
                                            aria-labelledby="pills-profile-tab"
                                        >
                                            <div class="employee-office-table">
                                                <div class="table-responsive">
                                                    <table class="table custom-table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Gender</th>
                                                                <th>
                                                                    Salary
                                                                    Current
                                                                </th>
                                                                <th>
                                                                    Date Of
                                                                    Birth
                                                                </th>
                                                                <th>
                                                                    Phone Number
                                                                </th>
                                                                <th>Address</th>
                                                                <th>
                                                                    Bank Name
                                                                </th>
                                                                <th>
                                                                    Account
                                                                    Number
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-5.jpg"
                                                                            class="img-fluid"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            Danny
                                                                            Ward
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>Male</td>
                                                                <td>$3000</td>
                                                                <td>
                                                                    25 Jun 1984
                                                                </td>
                                                                <td>
                                                                    9876543231
                                                                </td>
                                                                <td>
                                                                    201 Lunetta
                                                                    Street,Plant
                                                                    City,
                                                                    <br />{" "}
                                                                    Florida(FL),
                                                                    33566
                                                                </td>
                                                                <td>
                                                                    Life Essence
                                                                    Banks, Inc.
                                                                </td>
                                                                <td>
                                                                    112300987652
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            {" "}
                                                                            Linda
                                                                            Craver
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>Female</td>
                                                                <td>$2000</td>
                                                                <td>
                                                                    14 Feb 1984
                                                                </td>
                                                                <td>
                                                                    9876543221
                                                                </td>
                                                                <td>
                                                                    683 Longview
                                                                    Avenue,New
                                                                    York, <br />{" "}
                                                                    New
                                                                    York(NY),
                                                                    10011
                                                                </td>
                                                                <td>
                                                                    Life Essence
                                                                    Banks, Inc.
                                                                </td>
                                                                <td>
                                                                    112300987662
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            Jenni
                                                                            Sims
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>Female</td>
                                                                <td>$4000</td>
                                                                <td>
                                                                    20 Jan 1984
                                                                </td>
                                                                <td>
                                                                    9876534214
                                                                </td>
                                                                <td>
                                                                    {" "}
                                                                    4923 Front
                                                                    Street,Detroit,
                                                                    <br />{" "}
                                                                    Michigan(MI),
                                                                    48226
                                                                </td>
                                                                <td>
                                                                    Life Essence
                                                                    Banks, Inc.
                                                                </td>
                                                                <td>
                                                                    112300987653
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-6.jpg"
                                                                            class="img-fluid"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            {" "}
                                                                            Maria
                                                                            Cotton
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>Female</td>
                                                                <td>$5000</td>
                                                                <td>
                                                                    15 Jul 1984
                                                                </td>
                                                                <td>
                                                                    9876541123
                                                                </td>
                                                                <td>
                                                                    1246 Parkway
                                                                    Street,
                                                                    Brawley,{" "}
                                                                    <br />
                                                                    California(CA),
                                                                    92227
                                                                </td>
                                                                <td>
                                                                    Life Essence
                                                                    Banks, Inc.
                                                                </td>
                                                                <td>
                                                                    112300987654
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            {" "}
                                                                            John
                                                                            Gibbs
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>Male</td>
                                                                <td>$4500</td>
                                                                <td>
                                                                    05 Dec 1984
                                                                </td>
                                                                <td>
                                                                    9876541132
                                                                </td>
                                                                <td>
                                                                    4604 Fairfax
                                                                    Drive,Rochelle
                                                                    Park,
                                                                    <br /> New
                                                                    Jersey(NJ),
                                                                    07662
                                                                </td>
                                                                <td>
                                                                    Life Essence
                                                                    Banks, Inc.
                                                                </td>
                                                                <td>
                                                                    112300987655
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-10.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            {" "}
                                                                            Richard
                                                                            Wilson
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>Male</td>
                                                                <td>$4600</td>
                                                                <td>
                                                                    25 Apr 1984
                                                                </td>
                                                                <td>
                                                                    9876541321
                                                                </td>
                                                                <td>
                                                                    3088 Gordon
                                                                    Street, Los
                                                                    Angeles,
                                                                    <br />{" "}
                                                                    California(CA),
                                                                    90017
                                                                </td>
                                                                <td>
                                                                    Life Essence
                                                                    Banks, Inc.
                                                                </td>
                                                                <td>
                                                                    112300987656
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="employment.html"
                                                                        class="avatar"
                                                                    >
                                                                        <img
                                                                            class="img-fluid"
                                                                            alt="avatar image"
                                                                            src="assets/img/profiles/img-8.jpg"
                                                                        />
                                                                    </a>
                                                                    <h2>
                                                                        <a href="employment.html">
                                                                            Stacey
                                                                            Linville
                                                                        </a>
                                                                    </h2>
                                                                </td>
                                                                <td>Female</td>
                                                                <td>$4700</td>
                                                                <td>
                                                                    23 Jan 1984
                                                                </td>
                                                                <td>
                                                                    9876542312
                                                                </td>
                                                                <td>
                                                                    835 Sarah
                                                                    Drive,Lafayette,
                                                                    <br />{" "}
                                                                    Louisiana(LA),
                                                                    70506
                                                                </td>
                                                                <td>
                                                                    Life Essence
                                                                    Banks, Inc.
                                                                </td>
                                                                <td>
                                                                    112300987657
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center mt-3">
                                        <a
                                            href="javascript:void(0)"
                                            class="btn btn-theme button-1 ctm-border-radius text-white"
                                        >
                                            Download Report
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="add_report">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                            <h4 class="modal-title mb-3">Create Report</h4>
                            <form>
                                <p class="mb-2">Select Report Type</p>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input
                                        type="radio"
                                        class="custom-control-input"
                                        id="customRadio"
                                        name="example"
                                        value="customEx"
                                    />
                                    <label
                                        class="custom-control-label"
                                        for="customRadio"
                                    >
                                        Team Member
                                    </label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input
                                        type="radio"
                                        class="custom-control-input"
                                        id="customRadio2"
                                        name="example"
                                        value="customEx"
                                    />
                                    <label
                                        class="custom-control-label"
                                        for="customRadio2"
                                    >
                                        Time Off
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="mt-3">
                                        What data would you like to include?
                                    </label>

                                    <select
                                        multiple
                                        class="select w-100 form-control"
                                    >
                                        <option>Full Name</option>
                                        <option>Working Days Off</option>
                                        <option>Booked By</option>
                                        <option>Start Date</option>
                                        <option>End Date</option>
                                        <option>Team Name</option>
                                        <option>First Name</option>
                                        <option>Last Name</option>
                                        <option>Email</option>
                                        <option>Date Of Birth</option>
                                        <option>Phone Number</option>
                                    </select>
                                </div>
                            </form>
                            <button
                                type="button"
                                class="btn btn-danger text-white ctm-border-radius float-right ml-3"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                class="btn btn-theme button-1 text-white ctm-border-radius float-right"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Report;
