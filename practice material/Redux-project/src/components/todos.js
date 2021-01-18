// import react from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {del} from '../store/actions/lists'


 const Todos = () => {
     const todos = useSelector(state => state.lists.todos)
    const dispatch = useDispatch()
     //  console.log(todos)
     const delData = id => {
         dispatch(del(id))
     }
     return(
         <ul>
             {todos.map(item => 
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => delData(item.id)}>Delete</button>
                </li>)}
         </ul>
     )
 }

 export default Todos