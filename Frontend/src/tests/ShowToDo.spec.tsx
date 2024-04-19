import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ShowToDo } from '../components/ShowToDo';
import useTodos from '../hooks/useTodos';
import { vi, Mock } from 'vitest';
import { fireEvent } from '@testing-library/react';

vi.mock('../hooks/useTodos');

const mockUseTodos = useTodos as Mock;

describe('ShowToDo', () => {
  it('should display the correct number of todo items', () => {
    const items = [
      { id: '1', description: 'Buy milk', isCompleted: false },
      { id: '2', description: 'Read a book', isCompleted: false },
    ];

    mockUseTodos.mockReturnValue({
      items,
      fetchItems: vi.fn(),
      markAsComplete: vi.fn(),
    });

    render(<ShowToDo />);

    expect(screen.getByText('Showing 2 Item(s)')).toBeInTheDocument();
    expect(screen.getByText('Buy milk')).toBeInTheDocument();
    expect(screen.getByText('Read a book')).toBeInTheDocument();
  });

  it('renders refresh and mark as completed buttons', () => {
    mockUseTodos.mockReturnValue({
      items: [{ id: '1', description: 'Buy milk', isCompleted: false }],
      fetchItems: vi.fn(),
      markAsComplete: vi.fn(),
    });

    render(<ShowToDo />);

    const refreshButton = screen.getByText('Refresh');
    const markCompletedButton = screen.getByText('Mark as completed');

    expect(refreshButton).toBeInTheDocument();
    expect(markCompletedButton).toBeInTheDocument();
  });

  it('calls fetchItems when refresh button is clicked', () => {
    const mockFetchItems = vi.fn();
    mockUseTodos.mockReturnValue({
      items: [],
      fetchItems: mockFetchItems,
      markAsComplete: vi.fn(),
    });

    render(<ShowToDo />);
    const refreshButton = screen.getByText('Refresh');
    fireEvent.click(refreshButton);

    expect(mockFetchItems).toHaveBeenCalled();
  });

  it('calls markAsComplete when mark as completed button is clicked', () => {
    const mockMarkAsComplete = vi.fn();
    mockUseTodos.mockReturnValue({
      items: [{ id: '1', description: 'Buy milk', isCompleted: false }],
      fetchItems: vi.fn(),
      markAsComplete: mockMarkAsComplete,
    });

    render(<ShowToDo />);
    const markCompletedButton = screen.getByText('Mark as completed');
    fireEvent.click(markCompletedButton);

    expect(mockMarkAsComplete).toHaveBeenCalledWith({ id: '1', description: 'Buy milk', isCompleted: false });
  });
});
