import './App.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AddToDo } from './components/AddToDo';
import { ShowToDo } from './components/ShowToDo';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <AddToDo />
        <ShowToDo />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
