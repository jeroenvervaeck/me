import { default as React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa'

import { Nav, Footer, Copyright } from '../../components';
import { PROJECTS } from '../../assets/PROJECTS';

import './v1.scss';

const ProjectsPage = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})

	const [ project, setProject ] = useState(PROJECTS.find(project => project.id == window.location.pathname.split('/')[3]));
	
	// const [ route, setRoute ] = useState(null);

	/* 	
	useEffect(() => {
		if ( (parseInt(project.id) + 1) < PROJECTS.length ) {
			setRoute('/project/' + (parseInt(project.id) + 1));
		} else {
			setRoute('/project/' + (parseInt(project.id) + 1 - PROJECTS.length));
		}
	}) 
	*/



	// function runs with bugs on netifly and gh pages
	/* 	
	const next = () => {
		if ( (parseInt(project.id) + 1) < PROJECTS.length ) {
			history.push('/project/' + (parseInt(project.id) + 1));
		} else {
			history.push('/project/' + (parseInt(project.id) + 1 - PROJECTS.length));
		}
		window.location.reload();
	}
	*/

	return (
		<div className="project-detail">

			{/* Nav */}
			<Nav isHome={false} />

			{/* Project detail */}
			<Container className="project-detail__content">
				<Row className="project-detail__content-head">
					<Col sm={12}> <h5>{ (parseInt(project.id) + 1) + ' / ' + PROJECTS.length }</h5> </Col>
					<Col sm={12}> <h1>{ project.title }</h1> </Col>
				</Row>
				<Row className="project-detail__content-context">
					<Col sm={12} md={6} className="project-detail__content-context-text">
						<h3>{ project.phrase }</h3>
						<p>{ project.discription }</p>
						{ project.website ? <a href={project.website.link} target={'_blank'} >{project.website.name}</a> : null}
						{ 
							project.shoutout ? 
							project.shoutout.map(element => {
								return <a href={element.link} target={'_blank'} >{element.name} <br></br></a>
							})
							: null
						}
					</Col>
					<Col sm={12} md={6} className="project-detail__content-context-img">
						<img src={ project.img }></img>
					</Col>
					<Col className="project-detail__content-context-next">
						{/* <p style={{textDecoration: 'underline'}} onClick={ () => next() }>Volgend project</p> */}
						<Link to='/projects' style={{textDecoration: 'underline'}}>Terug naar projecten</Link>
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

export default ProjectsPage;
