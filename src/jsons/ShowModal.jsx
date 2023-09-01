import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DeleteStudents from "./DeleteInformation";
const ShowModal = () => {
  const [sdelete, setSdelete] = useState(false);
  const showDelete = () => {
    setSdelete(true);
  };
  const hideDelete = () => {
    setSdelete(false);
  };
  return (
    <div className="d-flex justify-content-center align-items-center m-3">
      <button className="btn btn-outline-dark" onClick={showDelete}>
        Show Delete
      </button>
      <Modal show={sdelete} onHide={hideDelete}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <DeleteStudents />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShowModal;
