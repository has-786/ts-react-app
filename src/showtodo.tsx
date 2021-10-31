import React from 'react'

interface ShowtodoProps{
    name:string,age:number
}
export const Showtodo:React.FC<ShowtodoProps>=({...todo})=>{

    return <div>
        <p>{todo.name}</p>--<p>{todo.age}</p>
    </div>


}