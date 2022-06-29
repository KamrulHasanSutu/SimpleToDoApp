import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from 'prop-types';

class CreateTodoForm extends React.Component {

    state = {
        text: '',
        description: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.createTodo(this.state)
        e.target.reset();
        this.setState({ text: '', description: '' })

    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>

                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        placeholder="Max pane"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Enter description</Label>
                    <Input
                        placeholder="detail you work"
                        name="description"
                        type="textarea"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <Button type="submit">CreateToDo</Button>
            </Form>
        )
    }



}
CreateTodoForm.propTypes = {
	createTodo: PropTypes.func.isRequired
};


export default CreateTodoForm