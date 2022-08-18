import React from "react";

function EditMembersModal() {
    return (
        <div class="modal fade" id="edit">
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
                        <h4 class="modal-title mb-3">Edit Members</h4>
                        <div class="form-group">
                            <select class="form-control select">
                                <option selected>Team Members</option>
                                <option value="1">Maria Cotton</option>
                                <option value="2">Danny Ward</option>
                                <option value="3">Linda Craver</option>
                                <option value="4">Jenni Sims</option>
                                <option value="5">John Gibbs</option>
                            </select>
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
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditMembersModal;
