import './App.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AddToDo } from './components/AddToDo';
import { ShowToDo } from './components/ShowToDo';

const App = () => {
	const [refreshKey, setRefreshKey] = useState(0);
	return (
		<div className="App">
			<Container>
				<Header />
				<AddToDo onAdd={() => setRefreshKey((prevKey) => prevKey + 1)} />
				<ShowToDo key={refreshKey} />
			</Container>
			<Footer />
		</div>
	);
};

export default App;
