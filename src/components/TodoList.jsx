import  { PropTypes } from "prop-types"
import { TodoItem } from "./TodoItem"
import { useState } from "react"

export const TodoList = ({todos, handleDelete, handleStatus}) => {

    return (
        <>
            <ul>
                {todos.map((todo, i) => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        index={ i }
                        handleDelete={ handleDelete }
                        handleStatus={ handleStatus }
                        />

                ))}
            </ul>
        </>      
    )
}

TodoList.propTypes = {
    todos: PropTypes.array
}