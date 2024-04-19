import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddToDo } from '../components/AddToDo';
import useAddTodo from '../hooks/useAddTodo';
import { vi } from 'vitest';

vi.mock('../hooks/useAddTodo');

const mockUseAddTodo = useAddTodo as unknown as vi.Mock;

describe('AddToDo', () => {
  beforeEach(() => {
    mockUseAddTodo.mockReturnValue({
      description: '',
      error: '',
      handleDescriptionChange: vi.fn(),
      handleAdd: vi.fn(),
      handleClear: vi.fn(),
      handleErrorDismiss: vi.fn(),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders correctly with initial states', () => {
    render(<AddToDo onAdd={vi.fn()} />);

    expect(screen.getByPlaceholderText('Enter description...')).toHaveValue('');
    expect(screen.queryByText('Error Message Here')).not.toBeInTheDocument();
  });

  it('calls handleAdd on button click', () => {
    const handleAdd = vi.fn();
    mockUseAddTodo.mockReturnValue({
      description: '',
      error: '',
      handleDescriptionChange: vi.fn(),
      handleAdd: handleAdd,
      handleClear: vi.fn(),
      handleErrorDismiss: vi.fn(),
    });

    render(<AddToDo onAdd={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: 'Add Item' }));

    expect(handleAdd).toHaveBeenCalled();
  });

  it('displays error message when error state is set', () => {
    const handleErrorDismiss = vi.fn();
    mockUseAddTodo.mockReturnValue({
      description: '',
      error: 'An error occurred',
      handleDescriptionChange: vi.fn(),
      handleAdd: vi.fn(),
      handleClear: vi.fn(),
      handleErrorDismiss: handleErrorDismiss,
    });

    render(<AddToDo onAdd={vi.fn()} />);
    expect(screen.getByText('An error occurred')).toBeInTheDocument();
  });

  it('allows input to change', () => {
    const handleDescriptionChange = vi.fn();
    mockUseAddTodo.mockReturnValue({
      description: '',
      error: '',
      handleDescriptionChange: handleDescriptionChange,
      handleAdd: vi.fn(),
      handleClear: vi.fn(),
      handleErrorDismiss: vi.fn(),
    });

    render(<AddToDo onAdd={vi.fn()} />);
    const input = screen.getByPlaceholderText('Enter description...');
    fireEvent.change(input, { target: { value: 'New Todo' } });

    expect(handleDescriptionChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
