// Note: Uncomment import lines during working with JSX Compiler.
// import React from 'react';
// import ReactDOM from 'react-dom';

import styled from 'styled-components';

const Navbar = (): JSX.Element => {
  return (
    <Nav>
      <SideMenu>
        <button>Menu</button>
      </SideMenu>
      <div>
        <Link href='#'>Home</Link>
        <Link href='#'>Gallery</Link>
        <Link href='#'>About</Link>
      </div>
      <Spacer/>
      <UserMenu>
        <button>Login</button>
        <button>Sign Up</button>
      </UserMenu>
    </Nav>
  );
};

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex; // <---------- required
`;

const SideMenu = styled.div`
  padding: 5px;
  background: #aacdd2;
  flex: none;
 `;
//
const Links = styled.div`
padding: 5px;
  background: #ddf9c4;
  flex: none
`;

const Link = styled.a`
padding: 0 5px
`;

const Spacer = styled.div`
background: #fff9c4;
  flex: 1 // <----------------- to fill empty navbar space
`;

const UserMenu = styled.div`
padding: 5px;
  background: #bbdefb;
  flex: none
`;

export default Navbar;
