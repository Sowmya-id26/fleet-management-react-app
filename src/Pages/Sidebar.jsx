function Sidebar(){
    const [Driver, setDriver]=useState("")
    const handlebtn=()=>{
        if(!reg||type||!Driver){
            alert("all fields are required")
            return;
        }
    }
    return(
        <>
        <h2>Add Fleet Form</h2>
        <input placeholder='VechileNo'
        onChange={(e)=>e.target.value}/>
        <option value=''>select</option>
         <option>car</option>
          <option>auto</option>
           <option>truck</option>
            <option>bus</option>
            <input placeholder="Driver name" onChange={(e)=>setDriver(e.target.value)}/>
            <button onClick={handlebtn}>Add</button>
        </>
    )

}
export default Sidebar;