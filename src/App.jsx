import { useState, useReducer } from 'react'
import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'
import { todoReducer } from './reducers/todoReducer';
import './App.css'


function App() {
    const [ todos, dispatch ] = useReducer(todoReducer, []);
    const [ name, setName] = useState("TodoList")

    const handleDelete = ( todoId ) => {

      const action = {
          type: 'delete',
          payload: todoId
      }

      dispatch( action );
  }

    const handleStatus = ( todoId ) =>{
        
        dispatch({
            type: 'change',
            payload: todoId
        });

    }

    const handleAddTodo = ( newTodo ) => {
        
        dispatch({
            type: 'add',
            payload: newTodo
        });

    }


    return (
      <>
        <h1>{name}</h1>
        <hr />
        <AddTodo
              handleAddTodo={handleAddTodo}
          />

        <div className="row">

          <div className="col-7">

            <TodoList
              todos={todos}
              handleDelete={handleDelete}
              handleStatus={handleStatus}
            />

          </div>
        </div>
      </>
    )
  }

export default App
