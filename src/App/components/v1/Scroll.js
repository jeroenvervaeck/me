import { default as React, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'

import './v1.scss';

const Scroll = () => {

	const [ showScroll, setShowScroll ] = useState(false);
	
	window.addEventListener("scroll", () => {
		let scroll = window.scrollY;
		( scroll > 250 ) ? setShowScroll(true) : setShowScroll(false)
	});

	return (
		showScroll 
		?
		<p 
			className="scroll" 
			onClick={ () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }
		>
			<FaArrowUp />
		</p>
		:
		''
	)
}

export default Scroll;
