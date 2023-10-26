// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"

// import { useEffect, useState } from "react"

//e.g.count
// const App = () => {
//   const[count,setCount]=useState(0)
  
//   useEffect(()=>{
//   document.title=`${count}`
//   },[count])
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={()=>setCount(count-1)}>-</button>
//     </div>
//   )
// }

// export default App













//e.g name
// const App = () => {
//   const[name,setName]=useState("")
//   useEffect(()=>{
//     document.title=`${name}`
//   })
//   return (
//     <div>
//       <input type="text" onChange={(e)=>setName(e.target.value)} />
//       <h1>My name is {name}</h1>
//     </div>
//   )
// }
// export default 


//eg.name change


// const App = () => {
//   const[name,setName]=useState("")
//   useEffect(()=>{
//       document.name=`${name}`
//   },[name])
//   return (
//     <div>
//       <h1>pallavi</h1>
//       <button onClick={()=>setName("pallavi wakase")}>click</button>
//     </div>
//   )
// }

// export default App





import React from 'react'

const App = () => {

  
useEffect(()=>{
  let a=document.getElementById('btn1')
  a.addEventListener('click',()=>{
    window.open()
  })
})
  return (
    <div>
      <button id="btn1">click</button>
    </div>
  )
}

export default App