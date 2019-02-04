import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import NavbarMenu from "./components/NavbarMenu";
import ModalForm from "./components/ModalForm";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      alert: null
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        {this.state.alert}
        <NavbarMenu onClick={this.handleShow} />
        <Container fluid>
          <Row>
            <ModalForm show={this.state.show} onClose={this.handleClose} />
            <Col xs="3">
              <ListGroup>
                <ListGroupItem>Home</ListGroupItem>
                <ListGroupItem>Profile</ListGroupItem>
                <ListGroupItem>About</ListGroupItem>
                <ListGroupItem
                  onClick={this.handleShow}
                  style={{ cursor: "pointer" }}
                >
                  Feedback
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="9">
              <Card>
                <CardBody>
                  <CardTitle>Hello world</CardTitle>
                  <CardText>This is the card text</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
