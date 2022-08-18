import React from "react";

function EmploymentDetails({ error }) {
    return (
        <div className="card shadow-sm ctm-border-radius">
            <div className="card-header" id="headingTwo">
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
                            Let everyone know the essentials so they're fully
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
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <select
                                className="form-control select"
                                name="country"
                            >
                                <option selected>Country of Employment </option>
                                <option value="1">India</option>
                            </select>
                        </div>
                        <div className="col-md-12 form-group">
                            <div className="cal-icon">
                                <input
                                    className="form-control datetimepicker cal-icon-input"
                                    type="date"
                                    placeholder="Start Date"
                                    name="start_date"
                                />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Job Title"
                                name="job_title"
                            />
                        </div>
                        <div className="col-12 form-group mb-0">
                            <p className="mb-2">Employment Type</p>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="Permanent"
                                    name="employment_type"
                                    value={"permanent"}
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
                                    name="employment_type"
                                    value={"freelancer"}
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
                </div>
            </div>
        </div>
    );
}

export default EmploymentDetails;
