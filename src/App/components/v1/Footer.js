import { default as React } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaSpotify, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { logo__gray } from '../../assets';

import './v1.scss';

const Footer = () => {

	return (
		<Container className="footer">

			<Row>
				<Col xs={12} md={6} className="footer__info"> 
					<p className="footer__info-text-bold">Jeroen Vervaeck</p> 
					<p className="footer__info-text">jeroenvervaeck@outlook.com</p> 
					<p className="footer__info-text">0486 36 07 57</p> 
					{/* <p className="footer__info-text">WIP btw nummer</p>  */}
				</Col>
				<Col xs={12} md={6} className="footer__socials"> 
					<a className="footer__socials-element" href="https://www.linkedin.com/in/jeroen-vervaeck-115901170/"><FaLinkedin /></a> 
					<a className="footer__socials-element" href="https://www.instagram.com/"><FaInstagram /></a> 
					<a className="footer__socials-element" href="https://github.com/jeroenvervaeck"><FaGithub /></a> 
				</Col>
			</Row>

		</Container>
	)
}

export default Footer;
