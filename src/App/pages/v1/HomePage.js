import { default as React } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown'
import { FaDesktop, FaPencilAlt, FaAddressCard, FaChevronRight } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

import { Nav, Footer, Copyright, Scroll } from '../../components';
import { jeroen01, jeroen02, logo__white } from '../../assets';
import { PROJECTS } from '../../assets/PROJECTS'

import './v1.scss';

const HomePage = () => {
	const history = useHistory();

	return (
		<div className="home">

			{/* Nav */}
			<Nav isHome={true} />

			{/* Content 1 */}
			<div className="home__intro">
				<img className="home__intro-img" src={ jeroen01 }></img>
				<Fade bottom>
					<div className="home__intro-content">
						<img src={ logo__white }></img>
						<h1>Ik ben Jeroen</h1>
						<h2>Designer en Developer</h2>
						<p>gevestigd in Gent</p>
					</div>
				</Fade>
				<UseAnimations className="home__intro-scroll" animation={arrowDown} size={38} strokeColor='#f1f1f1' onClick={ () => document.getElementById('identity').scrollIntoView({ behavior: 'smooth' }) } />
			</div>

			{/* Content 2 */}
			<Container className="home__identity" id='identity'>
				<Row>
					<Col xs={12} md={6} className="home__identity-content">
						<h1>Wie ben ik?</h1>
						<p>
						Ik ben Jeroen Vervaeck, 22 jaar oud en woon in hartje Gent. Binnenkort studeer ik af in de opleiding Grafische en Digitale media aan de Arteveldehogeschool. 
						</p>
						<p>
						Ik ben een spontaan persoon die heel graag nieuwe ervaring op doet. Nieuwe dingen bijleren vind ik heel belangrijk. Daarom grijp ik elke kans die ik krijg. Tijdens mijn vrije tijd ga ik sporten met vrienden, ook muziek is een grote passie van mij. Ik apprecieer alle muziekgenres en sta altijd open om nieuwe dingen te ontdekken. 
						</p>
					</Col>
					<Col xs={12} md={6} className="home__identity-image">
						<img src={ jeroen02 }></img>
					
					</Col>
				</Row>
			</Container>

			{/* Content 3 */}
			<Container className="home__services" id='services'>
				<h1>Wat kan ik u aanbieden.</h1>
				<Row>
					<Col xs={12} md={4} className="home__services-card">
						<FaPencilAlt className="home__services-card-icon" />
						<h1 className="home__services-card-title">Design</h1>
						<p className="home__services-card-text">
						Elke zaak heeft een eigen verhaal. Het is belangrijk om het verhaal dat u vertelt in uw offline communicatie ook te vertellen met een bijhorende website. Ik kan u hierbij helpen! Ik ontwerp een design met mooie interfaces. Ook houd ik rekening met een goede gebruiksvriendelijkheid want de ervaring van de gebruiker is het belangrijkste van allemaal.
						</p>
					</Col>
					<Col xs={12} md={4} className="home__services-card">
						<FaDesktop className="home__services-card-icon" />
						<h1 className="home__services-card-title">Development</h1>
						<p className="home__services-card-text">
						Na het ontwerpen van een mooi design is het tijd om te developen. In deze stap zal ik het volledige ontwerp uitwerken naar een website en/of app. Ik zorg ervoor dat het product volledig responsive is waardoor deze zowel op desktop als op mobiele apparaten gebruiksvriendelijk zal zijn. Eenmaal de website volledig klaar is zorg ik ervoor dat deze online komt te staan. Hierna zorg ik ook voor het onderhoud van jouw online product, zodat deze altijd up to date blijft. 
						</p>
					</Col>
					<Col xs={12} md={4} className="home__services-card">
						<FaAddressCard className="home__services-card-icon" />
						<h1 className="home__services-card-title">Marketing</h1>
						<p className="home__services-card-text">
						Naast het maken van jouw website kan ik ook bijstaan bij de online marketing van jouw bedrijf. Samen kijken we wat het beste past bij u, we zoeken de gepaste doelgroep en de juiste kanalen waarop u uw onderneming kan promoten. Actief zijn op sociale media is tegenwoordig een absolute must. Ik help u bij het ontwerpen en plaatsen van posts op al uw sociale media kanalen. 
						</p>
					</Col>
				</Row>
			</Container>

			{/* Content 4 */}
			<Container className="home__projects" id='projects'>
				<h1>Mijn projecten</h1>
				<p>Hier kan je alle projecten vinden die ik doorheen mijn carrière heb volbracht. Klik erop om meer informatie te krijgen.</p>

				<Row className="home__projects-content">
					{
						PROJECTS.map((project, index) => {
							return (
								<Col className="home__projects-content-element" sm={12} md={6} lg={4} onClick={ () => history.push('/project/' + index) } key={index}>
									<img src={ project.img }></img>
									<FaChevronRight className="home__projects-content-element-arrow" />
								</Col>
							)
						})
					}
				</Row>
			</Container>

			{/* Footer */}
			<Footer />

			{/* Copyright */}
			<Copyright />

			{/* Scroll */}
			<Scroll />
			
		</div>
	)
}

export default HomePage;
