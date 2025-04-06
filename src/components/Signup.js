import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';

const SignupContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
  font-size: 3rem;
  text-shadow: 3px 3px 0 var(--border-color);
  letter-spacing: 3px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-family: 'Bangers', cursive;
    font-size: 1.2rem;
    color: var(--text-color);
    letter-spacing: 1px;
  }
`;

const ErrorMessage = styled.div`
  color: var(--error-color);
  background-color: #ffebee;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 2px solid var(--error-color);
  width: 100%;
  text-align: center;
  font-family: 'Comic Neue', cursive;
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.1rem;
  font-family: 'Comic Neue', cursive;
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;
    font-family: 'Bangers', cursive;
    letter-spacing: 1px;
    
    &:hover {
      text-decoration: underline;
      color: var(--secondary-color);
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--border-color);
  box-shadow: 4px 4px 0 var(--border-color);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--secondary-color);
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--border-color);
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 var(--border-color);
  }
`;

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const { error } = await signUp(email, password);
      if (error) throw error;
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SignupContainer>
      <div className="comic-panel">
        <Title>Sign Up</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </Form>
        <LoginLink>
          Already have an account? <Link to="/login">Login here</Link>
        </LoginLink>
      </div>
    </SignupContainer>
  );
}

export default Signup; 