import React, { useEffect, useState } from "react";
import Message from "./Message";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Comments = () => {
  const [messages, setMessages] = useState({});
  const [id, setId] = useState(1);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  const getNext = () => {
    if (id >= 1) {
      setId((id) => id + 1);
    }
    fetchMessage(id);
  };
  const getPrevious = () => {
    if (id >= 1) {
      setId((id) => id - 1);
    } else {
      setId(1);
      toast.warning("Already on first messsage!", {
        position: "top-center",
      });
    }

    fetchMessage(id);
  };
  const fetchMessage = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    fetchMessage(id);
  }, []);
  return (
    <div>
      <Message id={messages.id} title={messages.title} body={messages.body} />
      <button className="btn btn-outline-dark col-1 mx-2" onClick={getPrevious}>
        Previous
      </button>
      <button className="btn btn-outline-dark col-1 mx-2" onClick={getNext}>
        Next
      </button>
      <button className="btn btn-outline-dark col-3 mx-2" onClick={showModal}>
        Show in Modal
      </button>
      <ToastContainer />
      <Modal show={show} onHide={hideModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Message
            id={messages.id}
            title={messages.title}
            body={messages.body}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Comments;
