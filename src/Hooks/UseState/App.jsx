import { useState } from "react"


function App(){
  const[count,setCount]=useState(0)
  const[color,setcolor]=useState('red')
  const[msg,setMsg]=useState('subscribe🔔')
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2 style={{color:`${color}`}}>{count}</h2>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setcolor('green')}>color</button>
      <button onClick={()=>setMsg('subscribed')}>{msg}</button>
    </div>
  )
}

export default App