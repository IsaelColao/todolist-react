import { useState } from "react";
import PropTypes from 'prop-types';



export const AddTodo = ({ handleAddTodo }) => {

    const [inputValue, setInputValue] = useState(""); // ''
    const [key, setKey] = useState(1)

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length < 2 ) {
            alert("La tarea debe tener al menos 2 caracteres")
            return;
        }
        
        setKey( key + 1)
        const newTodo = {
            id: key,
            title: inputValue,
            completed: false
        };
        
        handleAddTodo( newTodo );
        setInputValue('')
    
    }  

    return (
        <form onSubmit={ handleSubmit } >
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Escribe una tarea..."
            />
            <button>Añadir Tarea</button>
        </form>
    )
}

AddTodo.propTypes = {
    setTodos: PropTypes.func
}
