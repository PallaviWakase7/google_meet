const Javascript=()=>{
    const name="pallavi"
    const age=26

    function clicked(){
        document.body.style.background="red";
    }
    return(
        <div classname="javascript">
            <h1>my name is {name} and my age is {age}</h1>
            <h1>{`my name is ${name} and ${age}`}</h1>
            <button onClick={clicked}>click</button>
        </div>
    )
}
export default Javascript