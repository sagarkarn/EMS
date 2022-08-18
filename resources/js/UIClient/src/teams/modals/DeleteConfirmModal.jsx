import React from "react";

function DeleteConfirmModal() {
    return (
        <div class="modal fade" id="delete">
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
                        <h4 class="modal-title mb-4">
                            Are You Sure Want to Delete?
                        </h4>
                        <button
                            type="button"
                            class="btn btn-danger ctm-border-radius text-center mb-2 mr-3"
                            data-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            class="btn btn-theme button-1 ctm-border-radius text-white text-center mb-2"
                            data-dismiss="modal"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirmModal;
