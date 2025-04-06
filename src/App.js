import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { TodoProvider } from './contexts/TodoContext';
import { GlobalStyles } from './styles/GlobalStyles';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <AuthProvider>
        <TodoProvider>
          <GlobalStyles />
          <div className="app">
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <TodoList />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </TodoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App; 