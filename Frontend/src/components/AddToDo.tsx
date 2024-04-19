import { Button, Container, Row, Col, Form, Stack } from 'react-bootstrap';
import { ErrorMessage } from './ErrorMessage';
import useAddTodo from '../hooks/useAddTodo';

type Props = {
  onAdd: () => void;
};

export const AddToDo = ({ onAdd }: Props) => {
  const { description, error, handleDescriptionChange, handleAdd, handleClear, handleErrorDismiss } = useAddTodo(onAdd);

  return (
    <>
      <Row>
        <Col>
          <Container>
            <h1>Add Item</h1>
            <Form.Group as={Row} className="mb-3" controlId="formAddTodoItem">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col md="6">
                <Form.Control
                  type="text"
                  placeholder="Enter description..."
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 offset-md-2" controlId="formAddTodoItem">
              <Stack direction="horizontal" gap={2}>
                <Button variant="primary" onClick={handleAdd}>
                  Add Item
                </Button>
                <Button variant="secondary" onClick={handleClear}>
                  Clear
                </Button>
              </Stack>
            </Form.Group>
          </Container>
        </Col>
      </Row>
      <ErrorMessage message={error} onClose={handleErrorDismiss} />
    </>
  );
};
