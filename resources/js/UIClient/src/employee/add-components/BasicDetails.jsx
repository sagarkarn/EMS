import React, { useEffect, useState } from "react";

function BasicDetails(props) {
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors(props.error);
    }, [props.error]);
    const [fNameError, setNameError] = useState(false);
    const [lNameError, setLNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    return (
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
                    <div className="row">
                        <div className="col form-group">
                            <input
                                type="text"
                                className={`form-control ${
                                    "f_name" in errors ? "is-invalid" : ""
                                }`}
                                placeholder="First Name"
                                name="f_name"
                                onKeyUp={(e) => {
                                    let value = e.currentTarget.value;
                                    if (value.trim().length == 0) {
                                        setErrors({
                                            ...errors,
                                            f_name: "Enter valid last name",
                                        });
                                    } else {
                                        setErrors(deleteIn(errors, "f_name"));
                                    }
                                }}
                            />
                            <span className="text-danger">
                                {"f_name" in errors ? errors["f_name"] : ""}
                            </span>
                        </div>
                        <div className="col form-group">
                            <input
                                type="text"
                                className={`form-control ${
                                    "l_name" in errors ? "is-invalid" : ""
                                }`}
                                placeholder="Last Name"
                                name="l_name"
                                onKeyUp={(e) => {
                                    let value = e.currentTarget.value;
                                    if (value.trim().length == 0) {
                                        setErrors({
                                            ...errors,
                                            l_name: "Enter valid last name",
                                        });
                                    } else {
                                        setErrors(deleteIn(errors, "l_name"));
                                    }
                                }}
                            />
                            <span className="text-danger">
                                {"l_name" in errors ? errors["l_name"] : ""}
                            </span>
                        </div>
                        <div className="col-12 form-group">
                            <input
                                type="email"
                                className={`form-control ${
                                    "email" in errors ? "is-invalid" : ""
                                }`}
                                placeholder="Email"
                                name="email"
                                onKeyUp={(e) => {
                                    let value = e.currentTarget.value;
                                    if (value.trim().length == 0) {
                                        setErrors({
                                            ...errors,
                                            email: "Email is required",
                                        });
                                    } else {
                                        setErrors(deleteIn(errors, "email"));
                                    }
                                }}
                            />
                            <span className="text-danger">
                                {"email" in errors ? errors["email"] : ""}
                            </span>
                        </div>
                        <div className="col-md-12">
                            <div className=" custom-control custom-checkbox mb-0">
                                <input
                                    type="checkbox"
                                    id="send_email"
                                    name="send_email"
                                    className="custom-control-input"
                                />
                                <label
                                    className="mb-0 custom-control-label"
                                    for="send_email"
                                >
                                    Send them an invite email so they can log in
                                    immediately
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function deleteIn(obj, keyName) {
    let obje = Object.keys(obj)
        .filter((key) => key != keyName)
        .reduce((r_obj, key) => {
            r_obj[key] = obj[key];
            return r_obj;
        }, {});
    return obje;
}

export default BasicDetails;
