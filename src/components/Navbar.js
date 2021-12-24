import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import '../App.css';
const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <h2 className="App-header">My First React App</h2>
		<NavLink to='/about' activestyle={{ color:'red' }}>
			About
		</NavLink>
		
		<NavLink to='/form' activestyle={{ color:'red' }}>
            Register
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/form'>Register</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
