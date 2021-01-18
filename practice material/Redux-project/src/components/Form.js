import { useState } from 'react'
import { useDispatch} from 'react-redux'
import {add} from '../store/actions/lists'
// import { useSelector } from 'react-redux'



 const Form = () => {
     const [text, setText] = useState("")
     const handleChange = e => {
         setText(e.target.value)
     }
     const dispatch = useDispatch()
     const submit = e => {
         e.preventDefault()
        console.log("ok")
        dispatch(add(text))
        setText("")
     }
     return(
         <form onSubmit={submit}>
             <input type="text" value={text} onChange={handleChange} placeholder="Enter new task"/>
             <button>add</button>
         </form>
     )
 }

 export default Form