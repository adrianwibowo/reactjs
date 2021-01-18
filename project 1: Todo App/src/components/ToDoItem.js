import React from "react"
import Button from "./Button"
import PropTypes from "prop-types"

const ToDoItem = ({todo, del,onDel, open}) => { //sebelumny prop, lalu agar lebih mudah di destruct dulu todo dari prop
    // const delById = id => {
    //     del(id)
    // }
    return (
        <div style={todoitem}>
            <p>{todo.title}</p> {/*--sebelumnya prop.todo.title */}
            <div>
                <Button text="edit" variant="success" action={() => open(todo.id, todo.title)}/>
                <Button text="delete" variant="warning" action={() => onDel(todo.id, todo.title)}/>
            </div>
        </div>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    del: PropTypes.func
}

export default ToDoItem

const todoitem ={
    background: "#218DFD",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}