import React from 'react';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import CardTitle from "reactstrap/es/CardTitle";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";

export default function Skills() {
    return (
        <Container fluid id={"skills"} className={"_100vh pt-5"}>
            <h1 className={"page-title"}>Skills</h1>
            <Row className={"mt-4"}>
                <Col xs={12} md={{size: 4, offset: 2}} className={"mb-3"}>
                    <Card>
                        <CardBody>
                            <CardTitle><h4>Languages I speak</h4></CardTitle>
                            <CardText>
                                <ul className={"list-unstyled list-centered"}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Go</li>
                                    <li>Java</li>
                                    <li>Kotlin</li>
                                    <li><strong>And way more to come...</strong></li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <CardBody>
                            <CardTitle><h4>Everything else I know</h4></CardTitle>
                            <CardText>
                                <ul className={"list-unstyled list-centered"}>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>JQuery</li>
                                    <li><strong>And way more to come...</strong></li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}