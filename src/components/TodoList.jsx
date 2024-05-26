import  { PropTypes } from "prop-types"
import { TodoItem } from "./TodoItem"


export const TodoList = ({todos, handleDelete, handleStatus}) => {

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        handleDelete={ handleDelete }
                        handleStatus={ handleStatus }
                        />

                ))}
            </ul>
        </>      
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleDelete: PropTypes.func,
    handleStatus: PropTypes.func
}