import React, {useState} from 'react'
import TodoCreator from '../TodoCreator/index'
import {List} from './TodoListElements'
import {AiFillCloseCircle, AiFillCheckCircle} from 'react-icons/ai'
import { Todo } from '../Todo/TodoElement'

function TodoList() {
    const [todos, setTodo] = useState([])

    const createTodo = todo => { // Adiciona uma nova lista de objetos ao array, contendo o id gerado aleatoriamente e o texto digitado pelo user
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodo(newTodos)
    }

    function deleteTodo (id) {
        const list = [...todos]
        const newTodos = list.filter(item => item.id !== id);

        setTodo(newTodos)
    }

    function changeStatus (id) { // Muda o status do objeto completed do array 
        let update = todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            } 

            return item;
        })
        setTodo(update) // atualiza o array
    }

    return (
        <Todo>
            <TodoCreator submit={createTodo} />
            <List>
                {todos.map(item => { // Cria um todo element para cada lista de objetos no array
                    return (
                        <li key={item.id} className={item.completed ? "active" : ""} >
                            {item.text}
                            <div>
                                <AiFillCheckCircle className="btn" size="30px" onClick={() => changeStatus(item.id)}  />
                                <AiFillCloseCircle className="btn" size="30px" onClick={() => deleteTodo(item.id)} />
                            </div>
                        </li>
                    )
                })}
            </List>
        </Todo>
    )
}

export default TodoList
