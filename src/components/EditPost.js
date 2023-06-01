import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from "react-bootstrap";

import './style/AlertBox.css'

const EditPost = ({ show, hideModal, submitEdit, username, id, handleChange }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')

    return (
        <Modal show={show} onHide={hideModal} centered dialogClassName="modal-dialog modal-dialog-centered">
            <Modal.Header dialogClassName='modal-header'>
                <Modal.Title dialogClassName='modal-title'>Edit item</Modal.Title>
            </Modal.Header>
            <Modal.Body dialogClassName='modal-body'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="col-form-label">Title:
                        </label>
                        <input
                            className="form-control input-alert-box"
                            type="text"
                            placeholder="Hello world"
                            name="title"
                            onChange={(e) => handleChange(setNewTitle, e)}
                            value={newTitle}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label" htmlFor="content">Content:
                        </label>
                        <textarea
                            name="content"
                            className="form-control textarea input-alert-box"
                            placeholder="Content here"
                            onChange={(e) => handleChange(setNewContent, e)}
                            value={newContent}></textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer dialogClassName='modal-footer'>
                <Button className="btn btn-light btn-outline-secondary" variant="secondary" onClick={hideModal}>
                    Close
                </Button>
                <Button className="btn btn-success" variant="primary" onClick={() => submitEdit(newTitle, newContent, username, id)}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditPost;