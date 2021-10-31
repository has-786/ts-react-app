import React,{useEffect, useState} from 'react';
import './App.css';
import { Showtodo } from './showtodo';

const App:React.FC=() =>{
  const [todos,setTodos]=useState<{name:string,age:number}[]>([{name:'Hasnain',age:23}]) 

  return (
    <div>
        {todos.map(todo=><Showtodo key={todo.age} {...todo}/>)}
    </div>
  );
}






export default App;
