//reducer
const initialState = {
    todos: [
        {
            id: 1,
            title: "this is state"//...state.todos
        }
    ]
}

 const listReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD":
            const newItem = {
                id: state.todos.length + 1,
                title: payload
            }
            return {
                ...state,
                todos: [...state.todos, newItem] // sifat spread operator jika ada propertis yang sama, maka dia akan update jika bde akan nambah
            }
        case "DEL" :
            return{
                ...state,
                todos: state.todos.filter(item => item.id !== payload)
            }
        default:
            return state
    }
}

export default listReducer