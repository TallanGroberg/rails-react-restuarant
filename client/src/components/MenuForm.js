import React from 'react';
import { Form, } from "semantic-ui-react";

class MenuForm extends React.Component {
  state = { lunch: '', dinner: '', }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ lunch: "", dinner: "", })

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })

  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
        <Form.Input
        placeholder="lunch item"
        label="lunch item"
        name="lunch"
        onChange={this.handleChange}
        value={this.state.lunch}
         />
        <Form.Input
        placeholder="dinner item"
        label="dinner"
        name="dinner"
        onChange={this.handleChange}
        value={this.state.dinner}
         />
         <Form.Button color="orange">Submit</Form.Button>
        </Form.Group>
      </Form>


    )
  }
}

export default MenuForm;
