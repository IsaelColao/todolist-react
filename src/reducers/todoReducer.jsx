

export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload ); // 123123123


        case 'change': 
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        default:
            return state;
    }


}