import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AddToDo } from './components/AddToDo';
import { ShowToDo } from './components/ShowToDo';

const axios = require('axios');

const App = () => {
  useEffect(() => {
    // todo
  }, []);

  return (
    <div className="App">
      <Container>
        <Header />
        <Row>
          <Col>
            <AddToDo />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <ShowToDo />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
