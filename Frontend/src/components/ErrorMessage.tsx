import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

type Props = {
  message: string;
  onClose: () => void;
};

export const ErrorMessage = ({ message, onClose }: Props) => {
  return (
    <ToastContainer position="bottom-end" className="position-fixed">
      <Toast show={!!message} onClose={onClose} bg="danger" delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Action Failed!</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
