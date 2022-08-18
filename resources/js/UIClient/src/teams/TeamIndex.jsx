import React, { useEffect, useState } from "react";
import Sidebar from "../employee/component/Sidebar";
import AddMemberModal from "./modals/AddMemberModal";
import CreateTeamModal from "./modals/CreateTeamModal";
import DeleteConfirmModal from "./modals/DeleteConfirmModal";
import EditMembersModal from "./modals/EditMembersModal";
import Team from "../services/Team";

function TeamIndex() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        Team.all()
            .then((res) => setTeams(res))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div class="page-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <Sidebar active={"team"} />
                        </div>
                        <div class="col-xl-9 col-lg-8 col-md-12">
                            <div class="card shadow-sm ctm-border-radius">
                                <div class="card-body align-center">
                                    <h4 class="card-title float-left mb-0 mt-2">
                                        {teams?.length} Teams
                                    </h4>
                                    <ul class="nav nav-tabs float-right border-0 tab-list-emp">
                                        <li class="nav-item pl-3">
                                            <a
                                                href="javascript:void(0)"
                                                class="btn btn-theme button-1 text-white ctm-border-radius p-2 add-person ctm-btn-padding"
                                                data-toggle="modal"
                                                data-target="#addTeam"
                                            >
                                                <i class="fa fa-plus"></i> Add
                                                Team
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                {teams?.map((team, index) => {
                                    return (
                                        <div class="col-md-6">
                                            <div class="ctm-border-radius shadow-sm card">
                                                <div class="card-header">
                                                    <h4 class="card-title d-inline-block mb-0 mt-2">
                                                        {team.name}
                                                    </h4>
                                                    <div class="team-action-icon float-right">
                                                        <span
                                                            data-toggle="modal"
                                                            data-target="#edit"
                                                        >
                                                            <a
                                                                href="javascript:void(0)"
                                                                class="btn btn-theme text-white ctm-border-radius"
                                                                title="Edit"
                                                                data-original-title="Edit"
                                                            >
                                                                <i class="fa fa-pencil"></i>
                                                            </a>
                                                        </span>
                                                        <span
                                                            data-toggle="modal"
                                                            data-target="#delete"
                                                        >
                                                            <a
                                                                href="javascript:void(0)"
                                                                class="btn btn-theme text-white ctm-border-radius"
                                                                title="Delete"
                                                                data-original-title="Delete"
                                                            >
                                                                <i class="fa fa-trash"></i>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <span
                                                        class="avatar"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title=""
                                                        data-original-title="Maria Cotton"
                                                    >
                                                        <img
                                                            src="assets/img/profiles/img-6.jpg"
                                                            alt="Maria Cotton"
                                                            class="img-fluid"
                                                        />
                                                    </span>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="btn btn-theme button-1 float-right ctm-border-radius text-white"
                                                        data-toggle="modal"
                                                        data-target="#addmembers"
                                                    >
                                                        Add Members
                                                    </a>
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
            <CreateTeamModal />
            <AddMemberModal />
            <EditMembersModal />
            <DeleteConfirmModal />
        </>
    );
}

export default TeamIndex;
