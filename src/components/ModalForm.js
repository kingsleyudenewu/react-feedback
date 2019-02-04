import React, { Component } from "react";
import {
  FormGroup,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import swal from "sweetalert";
/**
 * <SweetAlert success title="Good job!" onConfirm={this.props.onConfirm}>
        You clicked the button!
      </SweetAlert>
 */

export default class ModalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: "",
      showSweetAlert: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ feedback: "" });
    swal("Notification", "Feedback Submited", "success");
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.show} toggle={this.props.onClose}>
          <ModalHeader toggle={this.props.onClose}>ASend Feedback</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <label htmlFor="">Enter Your Feedback</label>
                <Input
                  name="feedback"
                  type="textarea"
                  value={this.state.feedback}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Button color="success" type="submit">
                  Save
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.props.onClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
