import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import axios from 'axios';

export const ShowToDo = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    try {
      const response = await axios.get('http://localhost:7002/api/todoItems/');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleMarkAsComplete(item) {
    try {
      alert('todo');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Row className="mt-2">
      <Col>
        <h1>
          Showing {items.length} Item(s){' '}
          <Button variant="primary" className="pull-right" onClick={() => getItems()}>
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
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleMarkAsComplete(item)}>
                    Mark as completed
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
