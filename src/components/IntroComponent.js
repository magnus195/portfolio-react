import React from 'react';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

export default function Intro() {
    return (
        <Container fluid id={"intro"} className={"_100vh"}>
            <Row className={"d-flex _100vh"}>
                <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                    {}
                </div>
                <Col xs={12} id={"presentation"} className={"align-self-center"}>
                    <h1>I'm Magnus</h1>
                    <h2>Student and developer</h2>
                </Col>
                <Col xs={12} id={"scroll-down-prompt"} className={"align-self-end"}>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </Col>
            </Row>
        </Container>
    );
}