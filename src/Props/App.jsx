import ClassProps from "./Props/ClassProps"
import FunProps from "./Props/FunProps"
const App = () => {
  
    const name="pallavi"
    const age=22
   
    return (
    <div>
      <FunProps name={name} age={age} />
      <ClassProps name={name} age={age}/>
    </div>
  )
}

export default App