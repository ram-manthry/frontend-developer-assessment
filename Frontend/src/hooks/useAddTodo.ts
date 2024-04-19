// hooks/useAddTodo.js
import { SetStateAction, useState } from 'react';
import axios from 'axios';

const useAddTodo = (onAdd: () => void) => {
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleDescriptionChange = (event: { target: { value: SetStateAction<string> } }) => {
    setDescription(event.target.value);
  };

  const handleAdd = async () => {
    if (!description) {
      setError('Description cannot be empty');
      return;
    }
    try {
      const response = await axios.post('/api/todoItems/', {
        description,
        isCompleted: false,
      });
      if (response.status === 200 || response.status === 201) {
        setDescription('');
        onAdd();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const handleClear = () => {
    setDescription('');
    setError('');
  };

  const handleErrorDismiss = () => {
    setError('');
  };

  return {
    description,
    error,
    handleDescriptionChange,
    handleAdd,
    handleClear,
    handleErrorDismiss,
  };
};

export default useAddTodo;
