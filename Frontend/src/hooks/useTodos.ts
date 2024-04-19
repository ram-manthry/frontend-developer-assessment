import { useState, useEffect } from 'react';
import axios from 'axios';
import { TodoItem } from '../types/ToDo';

const useTodos = () => {
  const [items, setItems] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/todoItems');
      setItems(response.data);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  const markAsComplete = async (item: TodoItem) => {
    try {
      const response = await axios.put(`/api/todoItems/${item.id}`, {
        ...item,
        isCompleted: true,
      });
      if (response.status === 200 || response.status === 201) {
        fetchItems();
      }
    } catch (error) {
      console.error('Failed to mark as complete:', error);
    }
  };

  return {
    items,
    fetchItems,
    markAsComplete,
  };
};

export default useTodos;
