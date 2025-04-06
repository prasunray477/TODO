import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import styled from 'styled-components';

const TodoContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

const AddTodoForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  input {
    flex: 1;
  }
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  border: 2px solid var(--border-color);
  box-shadow: 3px 3px 0 var(--border-color);
  transition: all 0.2s ease;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 var(--border-color);
  }

  &.completed {
    opacity: 0.7;
    text-decoration: line-through;
  }
`;

const TodoContent = styled.div`
  flex: 1;
`;

const TodoTitle = styled.h3`
  margin: 0;
  color: var(--text-color);
`;

const TodoDescription = styled.p`
  margin: 0.5rem 0 0;
  color: #666;
  font-size: 0.9rem;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  border: 2px solid var(--border-color);

  &:hover {
    background-color: #cc0000;
  }
`;

function TodoList() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { todos, loading, addTodo, toggleTodo, deleteTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, description);
      setTitle('');
      setDescription('');
    }
  };

  if (loading) {
    return <div className="comic-panel">Loading your todos...</div>;
  }

  return (
    <TodoContainer>
      <Title>Your Comic Todo List</Title>
      <AddTodoForm onSubmit={handleSubmit} className="comic-panel">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo..."
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description (optional)"
        />
        <button type="submit">Add</button>
      </AddTodoForm>

      <TodoListContainer>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
          >
            <Checkbox
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id, !todo.completed)}
            />
            <TodoContent>
              <TodoTitle>{todo.title}</TodoTitle>
              {todo.description && (
                <TodoDescription>{todo.description}</TodoDescription>
              )}
            </TodoContent>
            <DeleteButton onClick={() => deleteTodo(todo.id)}>
              Delete
            </DeleteButton>
          </TodoItem>
        ))}
      </TodoListContainer>
    </TodoContainer>
  );
}

export default TodoList; 