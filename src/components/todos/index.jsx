import React from "react";
import shortid from "shortid";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ListView from "../listview";
import TableView from "../tableview";
import CreateTodoForm from "../create-todo-form";
import Controller from "../controllers";

class Todos extends React.Component {
    state = {
        todos: [
            {
                id: 'dsfsds3fds',
                text: 'main todo text',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'dsfsdfdsdsfs',
                text: 'main Another Task',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'dsfsdfdsdsdsfs',
                text: 'New Task',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ],
        searchTerm: '',
        isOpenTodoForm: false,
        view: 'list',
        filter: 'all'

    };

    toggleSelect = (todoId) => {
        const todos = [...this.state.todos]
        const todo = todos.find(item => item.id === todoId);

        todo.isSelect = !todo.isSelect;
        this.setState(todos)
    }
    toggleComplete = (todoId) => {
        const todos = [...this.state.todos]
        const todo = todos.find(item => item.id === todoId)
        todo.isComplete = !todo.isComplete
        this.setState(todos)
    }
    handleSearch = (value) => {
        this.setState({ searchTerm: value })
    }
    performSearch = () => {
        return this.state.todos.filter(item => item.text.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()))
    }

    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }
    createTodo = (obj) => {
        obj.id = shortid.generate()
        obj.time = new Date()
        obj.isComplete = false
        obj.isSelect = false

        const todos = [obj, ...this.state.todos]
        this.setState({ todos })
        this.toggleForm()
    }


    handleFilter = (filter) => {
        this.setState({ filter })
    }
    performFilter = (todos) => {

        const { filter } = this.state
        if (filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        } else if (filter === 'running') {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos;
        }
    }
    changeView = (e) => { this.setState({ view: e.target.value }) }
    // returning thos which not selected or completd
    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({ todos })
    }
    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({ todos })
    }
    reset = () => {
        const todos = [...this.state.todos]

        this.setState({
            todos,
            searchTerm: '',
            view: 'list',
            filter: 'all',
            isOpenTodoForm: false,
        })
    }


    getView = () => {
        let todos = this.performSearch()
        todos = this.performFilter(todos)
        return this.state.view === 'list' ? (
            <ListView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        ) : (
            <TableView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />

        );
    }

    render() {
        return (
            <div >
                <h1 className="display-4 text-center mb-5"> Basic TodoApp</h1>


                <Controller
                    term={this.state.searchTerm}
                    handleSearch={this.handleSearch}
                    toggleForm={this.toggleForm}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                    view={this.state.view}
                />

                {this.getView()}


                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create todo for you
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm
                            createTodo={this.createTodo}
                        />
                    </ModalBody>


                </Modal>
            </div>
        )
    }
}

export default Todos;    