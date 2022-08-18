import React, { useEffect, useState } from "react";
import OfficeRepo from "../../services/OfficeRepo";
import TeamRepo from "../../services/Team";
import UserRepo from "../../services/UserRepo";

function Teams(props) {
    const [teams, setTeams] = useState([]);
    const [offices, setOffices] = useState([]);
    const [users, setUsers] = useState([]);

    console.log(teams);

    useEffect(() => {
        TeamRepo.all()
            .then((res) => setTeams(res))
            .catch((err) => console.log(err));
        OfficeRepo.all()
            .then((res) => setOffices(res))
            .catch((err) => console.log(err));
        UserRepo.users()
            .then((res) => setUsers(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="card shadow-sm ctm-border-radius">
            <div className="card-header" id="headingThree">
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
                            Keep things tidy — and save time setting approvers
                            and public holidays.
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
                            <select className="form-control select" name="team">
                                <option selected>Team</option>
                                {teams &&
                                    teams.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>
                                                {item.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="col-md-12 form-group">
                            <select
                                className="form-control select"
                                name="line_manager"
                            >
                                <option selected>Line Manager</option>
                                {users?.map((user, index) => {
                                    return (
                                        <option key={index} value={user.id}>
                                            {user.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="col-12 form-group mb-0">
                            <select
                                className="form-control select"
                                name="office"
                            >
                                <option selected>Office Name</option>
                                {offices?.map((office, index) => {
                                    return (
                                        <option key={index} value={office.id}>
                                            {office.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teams;
