import React from 'react';
import Container from "reactstrap/es/Container";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <Container fluid id={"contact"} className={"_100vh"}>
            <Row className={"d-flex _100vh"}>
                <Col xs={12} id={"contact-info"} className={"align-self-center"}>
                    <h1 className={"page-title mb-5"}>Contact</h1>
                    <h2 className={"mb-4"}>You can find me in a lot of places, but email is always the best way to reach me</h2>
                    <div id={"social-buttons"}>
                        <div className={"social-button"}>
                            <a href={"http://github.com"}><FontAwesomeIcon icon={faGithub}/></a>
                        </div>
                        <div className={"social-button"}>
                            <a href={"http://linkedin.com"}><FontAwesomeIcon icon={faLinkedin}/></a>
                        </div>
                        <div className={"social-button"}>
                            <a href={"mailto:obama@wh.gov"}><FontAwesomeIcon icon={faEnvelope}/></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}