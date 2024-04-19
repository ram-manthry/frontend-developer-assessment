import { Button, Col, Row, Table } from 'react-bootstrap';
import useTodos from '../hooks/useTodos';

export const ShowToDo = () => {
  const { items, fetchItems, markAsComplete } = useTodos();

  return (
    <Row className="mt-2">
      <Col>
        <h1>
          Showing {items.length} Item(s){' '}
          <Button variant="primary" className="pull-right" onClick={fetchItems}>
            Refresh
          </Button>
        </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                {!item.isCompleted && (
                  <td>
                    <Button variant="warning" size="sm" onClick={() => markAsComplete(item)}>
                      Mark as completed
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
