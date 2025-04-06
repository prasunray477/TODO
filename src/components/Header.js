import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--header-bg);
  padding: 1rem 0;
  border-bottom: 3px solid var(--border-color);
  box-shadow: 0 5px 0 var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-family: 'Bangers', cursive;
  font-size: 2.8rem;
  color: var(--header-text);
  text-decoration: none;
  text-shadow: 3px 3px 0 var(--border-color);
  letter-spacing: 3px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '⚡';
    font-size: 2rem;
    animation: pop 0.5s infinite;
  }

  &:hover {
    color: var(--accent-color);
    transform: scale(1.05);
  }

  @keyframes pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: var(--header-text);
  text-decoration: none;
  font-family: 'Bangers', cursive;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--header-text);
  border-radius: 4px;
  transition: all 0.2s ease;
  text-shadow: 1px 1px 0 var(--border-color);

  &:hover {
    background-color: var(--header-text);
    color: var(--header-bg);
    transform: translate(2px, 2px);
  }
`;

const UserInfo = styled.div`
  color: var(--header-text);
  font-family: 'Comic Neue', cursive;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SignOutButton = styled.button`
  background-color: var(--error-color);
  color: var(--header-text);
  border: 2px solid var(--header-text);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;

  &:hover {
    background-color: var(--header-text);
    color: var(--error-color);
    transform: translate(2px, 2px);
  }
`;

function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">TODO</Logo>
        <NavLinks>
          {user ? (
            <UserInfo>
              <span>Welcome, {user.email}</span>
              <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
            </UserInfo>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header; 