import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const handle = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handle2 = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{border: '2px solid red'}}>
            <h3>counter: {count}</h3>
            <button onClick={handle}>Add</button>
            <button onClick={handle2}>Remove</button>
        </div>
    )
}