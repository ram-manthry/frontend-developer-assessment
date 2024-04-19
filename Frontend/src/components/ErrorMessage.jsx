import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

export const ErrorMessage = ({ message, onClose }) => {
  return (
    <ToastContainer position="bottom-end" className="position-fixed">
      <Toast show={message && message.length > 0} onClose={onClose} bg="danger">
        <Toast.Header>
          <strong className="me-auto">Action Failed!</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
