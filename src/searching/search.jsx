import { useEffect, useState } from "react"


const search = () => {
    const[data,setData]=useState([])
    const[search,setsearch]=useState("")
    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res=>res.json())
     .then(d=>setData(d))
    },[data])
  return (
    <div>
        <center> 
            <input type={'search'} onChange={(e)=>setsearch(e.target.value)} />
       </center>
       {data.filter((item)=>item.name.toLowerCase().includes(search)).map((item)=>{
        return(
            <section key={item.id}>
                <center><p>{item.name}</p></center>
            </section>
        )
       })}

    </div>
  )
}

export default search