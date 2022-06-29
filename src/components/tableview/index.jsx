import React from "react";
import {Input,Button,Table} from 'reactstrap'
import PropTypes from 'prop-types'

const RowItem = ({todo,toggleSelect, toggleComplete }) =>(
    <tr>
        <td>
            <Input 
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange={()=> toggleSelect(todo.id)}
            />
        </td>
        <td>{todo.time.toDateString()}</td>
        <td>{todo.text}</td>
        <td>
            <Button
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={()=> toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Completed':'Running'}
            </Button>
        </td>
    </tr>
)
RowItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

const TableView = ({todos,toggleSelect,toggleComplete})=> {
    return(
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <RowItem 
                        todo={todo}
                        toggleComplete={toggleComplete}
                        toggleSelect={toggleSelect}
                    />
                ))}
            </tbody>
        </Table>
    )
}
TableView.propTypes = {
	todos: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

export default TableView