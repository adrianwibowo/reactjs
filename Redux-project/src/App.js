import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux"
import store from './store/index'
import Todos from './components/todos'
import Form from './components/Form'
// import { useState } from 'react'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>Belajar Redux</h1>
        <Todos/>
        <Form/>
      </div>
    </Provider>
  )
}

export default App;
