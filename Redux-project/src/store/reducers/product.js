//reducer
const initialState = {
    product: [
        {
            id: 1,
            product: "product"//...state.todos
        }
    ]
}

 const productReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        default:
            return state
    }
}

export default productReducer