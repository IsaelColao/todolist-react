import PropTypes from 'prop-types'
import "../index.css"


export const TodoItem = ({ todo,  handleDelete, handleStatus }) => {

    return (
        <li>
            <div className='container'>
                <div className='column'>
                    <input type="checkbox" value={todo.completed} onClick={() => handleStatus( todo.id)}/>
                </div>

                <div className='column'>
                    <span>{todo.title}</span>
                </div>

                <div className='column'>
                    <button
                        onClick={ () => handleDelete( todo.id ) }
                    >
                        Borrar
                    </button>
                </div> 
            </div>
                
        </li>
    )
}

TodoItem.propTypes = {
        todo: PropTypes.object,
        handleDelete: PropTypes.func,
        handleStatus: PropTypes.func
}