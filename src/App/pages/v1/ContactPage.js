import { default as React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Nav, Footer, Copyright } from '../../components';

import './v1.scss';

const ContactPage = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
	
	const mail = 'jeroenvervaeck@outlook.com';
	const telephone = '0486 36 07 57';

	const copy = (string) => {
		navigator.clipboard.writeText(string).then(() => {

			if (string === mail) {
				document.getElementById('mail').innerHTML = `Gekopieerd`;
				setTimeout(() => {
					document.getElementById('mail').innerHTML = mail;
				}, 2000)
			} else if (string === telephone) {
				document.getElementById('telephone').innerHTML = `Gekopieerd`;
				setTimeout(() => {
					document.getElementById('telephone').innerHTML = telephone;
				}, 2000)
			}

		}, function(err) {
		  alert.error(`Kon de ${string} niet copieren: `, err);
		});
	}
	
	return (
		<div className="contact">

			{/* Nav */}
			<Nav isHome={false} />

			{/* Content 1 */}
			<Container className="contact__content">
				<Row>
					<Col sm={12}> <h1>Contact</h1> </Col>
					<Col sm={12}> <p>Interesse in een samenwerking met mijn. Aarzel dan niet om mij te contacteren.</p> </Col>
					
					<Col sm={12} className="contact__content-element" onClick={ () => copy(mail) }> 
						<h2 id="mail">{ mail }</h2> 
					</Col>

					<Col sm={12} className="contact__content-element" onClick={ () => copy(telephone) }>
						<h2 id="telephone">{ telephone }</h2> 
					</Col>

				</Row>
			</Container>

			
			{/* Footer */}
			<Footer />

			{/* Copyright */}
			<Copyright />

		</div>
	)
}

export default ContactPage;
