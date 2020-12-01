import { useState } from 'react'
import { TodoForm, TodoInput, TodoSubmit } from './ToDoElements'

function ToDo(props) {

    const [text, setText] = useState('')

    const defText = e => {
        setText(e.target.value)
    }

    const clearText = e => {
        e.preventDefault()

        props.submit({
            id: Math.floor(Math.random() * 10000), 
            text: text,
            completed: false
        })

        setText('')
    }

    return (
        <div>
            <TodoForm onSubmit={clearText}>
                <h1>O que você quer fazer hoje ?</h1>
                <TodoInput type="text" value={text} placeholder="Me fala!" onChange={defText} />
                <TodoSubmit>Inserir</TodoSubmit>
            </TodoForm>
        </div>
    )
}

export default ToDo;