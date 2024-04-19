import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, Stack } from 'react-bootstrap';
import axios from 'axios';
import { ErrorMessage } from './ErrorMessage';

type Props = {
	onAdd: () => void;
};

export const AddToDo = ({ onAdd }: Props) => {
	const [description, setDescription] = useState('');
	const [error, setError] = useState('');
	const handleDescriptionChange = (event: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setDescription(event.target.value);
	};

	async function handleAdd() {
		try {
			const response = await axios.post(
				'http://localhost:7002/api/todoItems/',
				{
					description,
					isCompleted: false,
				}
			);
			if (response.status === 200 || response.status === 201) {
				setDescription('');
				onAdd();
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				setError(error.response?.data);
			}
		}
	}

	function handleClear() {
		setDescription('');
	}

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
						<Form.Group
							as={Row}
							className="mb-3 offset-md-2"
							controlId="formAddTodoItem"
						>
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
			<ErrorMessage message={error} onClose={() => setError('')} />
		</>
	);
};
