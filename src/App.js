import React, { useState } from 'react'
import Form from './Form.js'
import List from './List.js'
import shortid from 'shortid'

const App = () => {
    // 初期値の設定
    const [todos, setTodos] = useState([])
    // 追加する
    const addTodo = content => {
        setTodos([
            ...todos,
            {
                content,
                id: shortid.generate()
            }
        ])
    }
    // 削除する
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todo={todos} deleteTodo={deleteTodo} />
        </>
    )
}

export default App