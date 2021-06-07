import { default as React, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';
import UseAnimations from "react-useanimations";
import menu2 from 'react-useanimations/lib/menu2'
import { Link, NavLink } from "react-router-dom";
import { logo__white } from "../../assets";

import './v1.scss';

const Nav = ({ isHome }) => {
	const [ showNav, setShowNav ] = useState(false);

	useEffect(() => {
		if ( ! isHome ) { document.getElementById('navigation__closed').className = "nav__closed nav__closed-scrolled" }

		window.onscroll = () => {
			if (window.scrollY < 1 && isHome) {
				document.getElementById('navigation__closed').className = "nav__closed nav__closed-top"
			}
			if (window.scrollY > 10 && isHome) {
				document.getElementById('navigation__closed').className = "nav__closed nav__closed-scrolled"
			}
		}
	}, []);
	
	return (
		<div className="nav">
			{ showNav ?
				/* When nav is OPEN */
				<div className="nav__open">
					<div className="nav__open-routes">
						<span className="nav__open-routes-divider"></span>
						<NavLink exact to="/" className="nav__open-routes-pri"  activeClassName="selected">Home</NavLink>
						<NavLink exact to="/projects" className="nav__open-routes-pri"  activeClassName="selected">Projecten</NavLink>
						<NavLink exact to="/contact" className="nav__open-routes-pri"  activeClassName="selected">Contact</NavLink>
						<span className="nav__open-routes-divider"></span>
					</div>
					<BsX className="nav__open-close"  onClick={ () => setShowNav(false) } />
				</div>
				:
				/* When nav is CLOSED */
				<div className="nav__closed" id="navigation__closed">
					<Link to="/" className="nav__closed-wrapper" >
						<img className="nav__closed-wrapper-img" src={ logo__white }></img>
						{/* { ( window.screen.width > 768 ) ? <p className="nav__closed-wrapper-name">Jeroen</p> : undefined } */}
					</Link>

					{/* Mobile */}
					{
					( window.screen.width < 768 )
					?
					<div className="nav__closed-sm">
						<UseAnimations className="nav__closed-sm-icon" animation={menu2} size={32} speed={1.5} strokeColor='#f1f1f1' onClick={ () => setTimeout(() => { setShowNav(true) }, 800) } />
					</div>
					:
					undefined
					}

					{/* Desktop */}
					{
					( window.screen.width > 768 )
					?
					<div className="nav__closed-md">
						<NavLink exact to='/' className="nav__closed-md-element" activeClassName="selected" ><p>Home</p></NavLink>
						<NavLink exact to='/projects' className="nav__closed-md-element" activeClassName="selected" ><p>Projecten</p></NavLink>
						<NavLink exact to='/contact' className="nav__closed-md-element" activeClassName="selected" ><p>Contact</p></NavLink>
					</div>
					:
					undefined
					}
				</div>
			}
		</div>
	)
}

export default Nav;
