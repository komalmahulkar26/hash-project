import React, { useState } from "react"; 

function Input(){
    const [value,setvalue]=useState("")
    const [data,setdata]=useState([])

    return(
        <div className="bg-gray-950 h-screen  " >
            
            <input type="search"  placeholder="search here" value={value} setvalue={setvalue} onChange={(e)=>setvalue(e.target.value)}
            onKeyPress={(e)=>{
                if(e.key==="Enter"){
                    setdata([...data,value]);
                    setvalue("")
                }
            }
            }/>
            {data.map((item)=>{
            return(
            <div className="w-96 bg-slate-100">{item}</div>)})}
        </div>
    )
}
export default Input

