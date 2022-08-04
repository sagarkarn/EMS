import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

function EmpIndex() {
    return (
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
                                                        Employees
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item text-center active button-5">
                                            <a
                                                href="employees.html"
                                                className="text-white"
                                            >
                                                All
                                            </a>
                                        </li>
                                        <li className="list-group-item text-center button-6">
                                            <a
                                                className="text-dark"
                                                href="employees-team.html"
                                            >
                                                Teams
                                            </a>
                                        </li>
                                        <li className="list-group-item text-center button-6">
                                            <a
                                                className="text-dark"
                                                href="employees-offices.html"
                                            >
                                                Offices
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="col-xl-9 col-lg-8  col-md-12">
                        <div className="card shadow-sm ctm-border-radius">
                            <div className="card-body align-center">
                                <h4 className="card-title float-left mb-0 mt-2">
                                    7 People
                                </h4>
                                <ul className="nav nav-tabs float-right border-0 tab-list-emp">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active border-0 font-23 grid-view"
                                            href="employees.html"
                                        >
                                            <i
                                                className="fa fa-th-large"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link border-0 font-23 list-view"
                                            href="employees-list.html"
                                        >
                                            <i
                                                className="fa fa-list-ul"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
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
                                                                    Maria Cotton
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <b>
                                                                        PHP Team
                                                                        Lead
                                                                    </b>
                                                                </p>
                                                                <p className="mb-0 ctm-text-sm">
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="e58884978c84868a91918a8ba5809d8488958980cb868a88"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                                src="assets/img/profiles/img-5.jpg"
                                                                alt="User Image"
                                                            />
                                                        </a>
                                                        <div className="profile-det-info">
                                                            <h4>
                                                                <a
                                                                    href="employment.html"
                                                                    className="text-primary"
                                                                >
                                                                    Danny Ward
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <b>
                                                                        Designing
                                                                        Team
                                                                        Lead
                                                                    </b>
                                                                </p>
                                                                <p className="mb-0 ctm-text-sm">
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="2a4e4b4444535d4b584e6a4f524b475a464f04494547"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                                src="assets/img/profiles/img-4.jpg"
                                                                alt="User Image"
                                                            />
                                                        </a>
                                                        <div className="profile-det-info">
                                                            <h4>
                                                                <a
                                                                    href="employment.html"
                                                                    className="text-primary"
                                                                >
                                                                    Linda Craver
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <b>
                                                                        IOS Team
                                                                        Lead
                                                                    </b>
                                                                </p>
                                                                <p className="mb-0 ctm-text-sm">
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="cfa3a6a1abaeacbdaeb9aabd8faab7aea2bfa3aae1aca0a2"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                                src="assets/img/profiles/img-3.jpg"
                                                                alt="User Image"
                                                            />
                                                        </a>
                                                        <div className="profile-det-info">
                                                            <h4>
                                                                <a
                                                                    href="employment.html"
                                                                    className="text-primary"
                                                                >
                                                                    Jenni Sims
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <b>
                                                                        Android
                                                                        Team
                                                                        Lead
                                                                    </b>
                                                                </p>
                                                                <p className="mb-0 ctm-text-sm">
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="5c36393232352f35312f1c39243d312c3039723f3331"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                                src="assets/img/profiles/img-2.jpg"
                                                                alt="User Image"
                                                            />
                                                        </a>
                                                        <div className="profile-det-info">
                                                            <h4>
                                                                <a
                                                                    href="employment.html"
                                                                    className="text-primary"
                                                                >
                                                                    John Gibbs
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <b>
                                                                        {" "}
                                                                        Business
                                                                        Team
                                                                        Lead
                                                                    </b>
                                                                </p>
                                                                <p className="mb-0 ctm-text-sm">
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="e58f8a8d8b81979c9681848980a5809d8488958980cb868a88"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                                src="assets/img/profiles/img-8.jpg"
                                                                alt="User Image"
                                                            />
                                                        </a>
                                                        <div className="profile-det-info">
                                                            <h4>
                                                                <a
                                                                    href="employment.html"
                                                                    className="text-primary"
                                                                >
                                                                    Stacey
                                                                    Linville
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <b>
                                                                        {" "}
                                                                        Testing
                                                                        Team
                                                                        Lead
                                                                    </b>
                                                                </p>
                                                                <p className="mb-0 ctm-text-sm">
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="2457504547415d484d4a524d48484164415c45495448410a474b49"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4">
                                        <div className="card widget-profile last-card-row">
                                            <div className="card-body">
                                                <div className="pro-widget-content text-center">
                                                    <div className="profile-info-widget">
                                                        <a
                                                            href="employment.html"
                                                            className="booking-doc-img"
                                                        >
                                                            <img
                                                                src="assets/img/profiles/img-10.jpg"
                                                                alt="User Image"
                                                            />
                                                        </a>
                                                        <div className="profile-det-info">
                                                            <h4>
                                                                <a
                                                                    href="employment.html"
                                                                    className="text-primary"
                                                                >
                                                                    Richard
                                                                    Wilson
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <b>
                                                                        {" "}
                                                                        Operation
                                                                        Manager
                                                                    </b>
                                                                </p>
                                                                <p className="mb-0 ctm-text-sm">
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="47352e242f263523302e2b34282907223f262a372b226924282a"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4">
                                        <div className="card widget-profile last-card-row">
                                            <div className="card-body">
                                                <div className="pro-widget-content text-center">
                                                    <div className="profile-info-widget">
                                                        <a
                                                            href="employment.html"
                                                            className="booking-doc-img"
                                                        >
                                                            <img
                                                                src="assets/img/profiles/img-15.jpg"
                                                                alt="User Image"
                                                            />
                                                        </a>
                                                        <div className="profile-det-info">
                                                            <h4>
                                                                <a
                                                                    href="employment.html"
                                                                    className="text-primary"
                                                                >
                                                                    Daniel
                                                                    Griffing
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <b>
                                                                        {" "}
                                                                        Designing
                                                                        Team
                                                                    </b>
                                                                </p>
                                                                <p className="mb-0 ctm-text-sm">
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="9df9fcf3f4f8f1faeff4fbfbf4f3faddf8e5fcf0edf1f8b3fef2f0"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4">
                                        <div className="card widget-profile last-card-row1">
                                            <div className="card-body">
                                                <div className="pro-widget-content text-center">
                                                    <div className="profile-info-widget">
                                                        <a
                                                            href="employment.html"
                                                            className="booking-doc-img"
                                                        >
                                                            <img
                                                                src="assets/img/profiles/img-14.jpg"
                                                                alt="User Image"
                                                            />
                                                        </a>
                                                        <div className="profile-det-info">
                                                            <h4>
                                                                <a
                                                                    href="employment.html"
                                                                    className="text-primary"
                                                                >
                                                                    Michelle
                                                                    Fairfax
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <b>
                                                                        PHP Team
                                                                    </b>
                                                                </p>
                                                                <p className="mb-0 ctm-text-sm">
                                                                    <a
                                                                        href="https://dleohr.dreamguystech.com/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="a1ccc8c2c9c4cdcdc4c7c0c8d3c7c0d9e1c4d9c0ccd1cdc48fc2cecc"
                                                                    >
                                                                        [email&#160;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default EmpIndex;
