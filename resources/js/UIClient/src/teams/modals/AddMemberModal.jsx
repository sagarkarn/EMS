import React, { useEffect, useState } from "react";
import "../../../lib/js/jquery-3.2.1.min";
import "../../../lib/plugins/select2/select2.min";
import UserRepo from "../../services/UserRepo";

function AddMemberModal() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        UserRepo.users()
            .then((res) => {
                $(".select2").select2();
                setUsers(res);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("submitted");
    };

    return (
        <div class="modal fade" id="addmembers">
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
                        <h4 class="modal-title mb-3">Add Members</h4>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <select
                                        class="form-control date-enter select2"
                                        style={{ width: "100%" }}
                                        placeholder="Name"
                                    >
                                        <option key={-1} value="">
                                            Select User
                                        </option>
                                        {users?.map((user, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={user.id}
                                                >
                                                    {user.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <button
                                type="button"
                                class="btn btn-danger ctm-border-radius float-right ml-3"
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMemberModal;
