import React from 'react';
import Container from "reactstrap/es/Container";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import CardImg from "reactstrap/es/CardImg";
import CardBody from "reactstrap/es/CardBody";
import CardTitle from "reactstrap/es/CardTitle";
import CardText from "reactstrap/es/CardText";
import CardLink from "reactstrap/es/CardLink";
import Row from "reactstrap/es/Row";

export default function Projects() {
    return (
        <Container fluid id={"projects"} className={"_100vh"}>
            <h1 className={"page-title"}>Projects</h1>
            <Row className={"mt-4"}>
                <Col xs={12} sm={6} md={{size: 4, offset: 2}} lg={{size: 3, offset: 3}} className={"mb-3"}>
                    <Card>
                        <CardImg src={process.env.PUBLIC_URL + "/img/roozbeh-eslami-YlVjrBkfXt8-unsplash.jpg"}/>
                        <CardBody>
                            <CardTitle><h4>Project 1</h4></CardTitle>
                            <CardText>Lorem ipsum something something...</CardText>
                            <CardLink href={"#"}>Click here to open</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardImg src={process.env.PUBLIC_URL + "/img/roozbeh-eslami-YlVjrBkfXt8-unsplash.jpg"}/>
                        <CardBody>
                            <CardTitle><h4>Project 2</h4></CardTitle>
                            <CardText>Lorem ipsum something something... (again)</CardText>
                            <CardLink href={"#"}>Click here to open (or don't)</CardLink>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}