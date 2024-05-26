import PropTypes from 'prop-types'


export const TodoItem = ({ todo,  handleDelete, handleStatus }) => {

    return (
        <li>
            <input type="checkbox" value={todo.completed} onClick={() => handleStatus( todo.id)}/>
            <span>{todo.title}</span>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete( todo.id ) }
            >
                Borrar
            </button>
        </li>
    )
}

TodoItem.propTypes = {
        todo: PropTypes.object,
        handleDelete: PropTypes.func,
        handleStatus: PropTypes.func
}