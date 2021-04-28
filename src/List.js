import React from 'react'
import Item from './Item.js'

const List = ({ todo, deleteTodo }) => {
    return (
        <ul>
            {
               todo.map(todo => {
                   return (
                       <Item 
                            content={todo.content}
                            id={todo.id}
                            key={todo.id}
                            deleteTodo={deleteTodo}
                        />
                   )
               })
            }
         
        </ul>
    )
}

export default List