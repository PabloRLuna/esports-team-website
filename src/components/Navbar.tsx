import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: rgba(44, 62, 80, 0.5);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    color: #3498db;
    background-color: rgba(52, 152, 219, 0.1);
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/" style={{ fontWeight: 'bold' }}>Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/equipo">Equipo</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contacto">Contacto</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
