import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';

const Todo = (props) => (
    <tr className="d-flex">
        <td className="col-10">{props.todo}</td>
        <td className="col-2" style={{ textAlign: 'right' }}>
            <button
                onClick={() => {
                    props.editTodo(props.keyt);
                }}
            >
                Edit
            </button>
            {'  '}
            <button
                onClick={() => {
                    props.deleteTodo(props.keyt);
                }}
            >
                delete
            </button>
        </td>
    </tr>
);

export default function SimpleTodosList() {
    const [todos, setTodoList] = useState([]);
    useEffect(() => {
        axios
            .get('https://merndeploybackend1.onrender.com/activity/')
            .then((response) => {
                setTodoList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const deleteTodo = (id) => {
        axios
            .delete('https://merndeploybackend1.onrender.com/activity/delete/' + id)
            .then((response) => {
                console.log(response.data);
            });

        setTodoList(todos.filter((el) => el._id !== id));
    };

    const editTodo = (id) => {
        window.location = '/update/' + id;// change the current page's location and redirect the browser to a different URL
    };

    return (
        <div>
            <Navbar />

            <h3>Logged Todos</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        return (
                            <Todo
                                todo={todo.activity}
                                key={todo._id}
                                keyt={todo._id}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
