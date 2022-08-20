import React, { useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import Teams from "../../services/Team";

function CreateTeamModal() {
    const [name, setName] = useState("");
    const [open, close] = useSnackbar();
    const handleSubmit = (event) => {
        event.preventDefault();
        Teams.store(name)
            .then((res) => {
                console.log(res);
                open(res.message);
            })
            .catch((error) => console.log(error));
    };
    return (
        <div class="modal fade" id="addTeam">
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
                        <h4 class="modal-title mb-3">Create New Team</h4>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.currentTarget.value)
                                    }
                                />
                            </div>
                            <button
                                type="button"
                                class="btn btn-danger ctm-border-radius float-right ml-3"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                class="btn btn-theme button-1 ctm-border-radius text-white float-right"
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

export default CreateTeamModal;
