import logo from './logo.svg';
import FormInput from "./components/FormInput"
import ToDoItem from "./components/ToDoItem"
import './App.css';
import React from "react"
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal';


class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "reading book"
      },
      {
        id: 2,
        title: "workout training"
      }
    ],
    isEdit: false,
    isDelete: false,
    editData: {
      id: "",
      title: ""
    }
  }

  update = () => {
    const { id, title } = this.state.editData
    const newData = { id, title }
    const newToDos = this.state.todos
    newToDos.splice((id - 1), 1, newData)
    this.setState({
      todos: newToDos,
      isEdit: false,
      editData: {
        id: "",
        title: ""
      }
    })
  }

  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    })
  }

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data
      }
    })
  }

  closeModal = () => {
    this.setState({
      isEdit: false,
      isDelete: false
    })
  }

  deteleTask = () => {
    const { id } = this.state.editData
    this.setState({
      todos: this.state.todos.filter(
        item => item.id !== id
      ),
      isDelete: false
    })
  }

  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }

openDelete = (id, data) => {
  this.setState({
    isDelete: true,
    editData: {
      id,
      title: data
    }
  })
}
 
  render() {
    const { todos } = this.state
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {todos.map(item =>
            <ToDoItem
              key={item.id}
              todo={item}
              onDel={this.openDelete}
              open={this.openModal}
            />
          )}
        </div>
        <div className="input-form">
          <FormInput add={this.addTask} />
        </div>
        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          change={this.setTitle}
          data={this.state.editData}
          update={this.update}
        />
        <div>
          <DeleteModal  
          isDel={this.state.isDelete}
          del={this.deteleTask}
          close={this.closeModal}
          />
        </div>
      </div>
    );
  }

}

export default App;
