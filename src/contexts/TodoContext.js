import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from './AuthContext';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchTodos();
    }
  }, [user]);

  const fetchTodos = async () => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title, description = '') => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .insert([
          {
            title,
            description,
            user_id: user.id,
            completed: false,
          },
        ])
        .select();

      if (error) throw error;
      setTodos([data[0], ...todos]);
    } catch (error) {
      console.error('Error adding todo:', error.message);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      const { error } = await supabase
        .from('todos')
        .update({ completed })
        .eq('id', id);

      if (error) throw error;
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed } : todo
        )
      );
    } catch (error) {
      console.error('Error updating todo:', error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error.message);
    }
  };

  const value = {
    todos,
    loading,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
} 