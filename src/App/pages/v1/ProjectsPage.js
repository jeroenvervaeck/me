import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa'

import { Nav, Footer, Copyright, Scroll } from '../../components';
import { PROJECTS } from '../../assets/PROJECTS';

import './v1.scss';

const ProjectsPage = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})

	const history = useHistory();

	return (
		<div className="projects">

			{/* Nav */}
			<Nav isHome={false} />

			{/* Projects */}
			<Container className="home__projects" id='projects'>
				<h1>Mijn projecten</h1>
				<p>Hier kan je alle projecten vinden die ik doorgeen mijn carriere heb volbracht. Klik erop om meer infomatie te verkrijgen.</p>

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

export default ProjectsPage;
