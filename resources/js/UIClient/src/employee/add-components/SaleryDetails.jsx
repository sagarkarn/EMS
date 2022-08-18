import React, { useEffect, useState } from "react";
import CurrencyRepo from "../../services/CurrencyRepo";

function SaleryDetails({ error }) {
    const [currencies, setCurrencies] = useState([]);
    useEffect(() => {
        CurrencyRepo.all()
            .then((res) => setCurrencies(res))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="card shadow-sm ctm-border-radius">
            <div className="card-header" id="headingFour">
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
                            Stored securely, only visible to Super Admins,
                            Payroll Admins, and themselves.
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
                            <select
                                className="form-control select"
                                name="currency"
                            >
                                <option selected>Currency </option>
                                {currencies?.map((currencies, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={currencies.id}
                                        >
                                            {currencies.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="col-md-12 form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Amount"
                                name="amount"
                            />
                        </div>
                        <div className="col-12 form-group">
                            <select
                                className="form-control select"
                                name="frequency"
                            >
                                <option selected>Frequency</option>
                                <option value="1">Annualy</option>
                                <option value="2">Monthly</option>
                                <option value="3">Weekly</option>
                                <option value="4">Daily</option>
                                <option value="5">Hourly</option>
                                <option value="6">Fixed</option>
                            </select>
                        </div>
                        <div className="col-md-12 form-group mb-0">
                            <div className="cal-icon">
                                <input
                                    className="form-control datetimepicker cal-icon-input"
                                    type="date"
                                    placeholder="Start Date"
                                    name="salery_start_date"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleryDetails;
