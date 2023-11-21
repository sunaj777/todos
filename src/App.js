import { useState } from "react";
import "./App.css"

export default function Home() {
const[inputSearch,setInputSearch]=useState('')
const [todos,setTodos]=useState([])

const handleSave=()=>{
  const objectTodo={
    title:inputSearch,
    done:false

  }
  const clone=[...todos,objectTodo]
    setTodos(clone)
    setInputSearch('')
  
}

 const handleRemove = (index)=>{
  const clone = [...todos]
  clone.splice(index,1)
  setTodos(clone)
 }
 const handleCheck =(index)=>{
  const clone = [...todos]
  clone[index].done = ! clone[index].done
  setTodos(clone)
 }
const handleKeyDown=(e)=>{
  if(e.key==="Enter"){
    handleSave()
  }
}


  return (
    <div className="todo-container">
   <h1 className="todo-title">My Todos</h1>
      <div className="add-area">
        <input type="text" value={inputSearch} onChange={(e)=>{setInputSearch(e.target.value)}}   onKeyDown={handleKeyDown}/>
        <button onClick={handleSave} >Save</button>
      </div>

      <ul className="todo-list">
       {
        todos.map((x,index)=>{
          return(
          <li key={index}>
          <div>
            <input type="checkbox"  checked={todos.done} onClick={()=>{handleCheck(index)}} />
            {
              x.done ? <s>{x.title}</s> :x.title
            }
          </div>
          <button onClick={()=>{handleRemove(index)}}>Remove</button>
        </li>
)
        })
       }
       </ul>
     

    </div>
  )
}