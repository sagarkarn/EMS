import React from "react";

function CreateTeamModal() {
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
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Name"
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
                            type="button"
                            class="btn btn-theme button-1 ctm-border-radius text-white float-right"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTeamModal;
