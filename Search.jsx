import React, { useState } from "react";


function Search(){
    const[keyword,setkeywords]=useState("")
    const[ list,setlist]=useState([])

    const handleAdd=()=>{
        setlist([...list,keyword]);
        console.log( keyword)
    }
    const handleDelete=(keyword)=>{
        setlist(list.filter((e)=>i !==keyword));
        console.log()
    }
    return(
        <div className=" bg-fuchsia-700 w-screen flex justify-center  h-screen">

    <div className="bg-fuchsia-600 text-white mt-11  w-5/12 py-3 h-40 px-10">
            <input type="radio"/>create the todo
            <div className="flex justify-between">
            <a href="">ALL</a>
            <a href="">active</a>
            <a href="">complelted</a>
            <a href="">clean complelted</a>
            </div>

            <input type="search" placeholder="search here" keyword={keyword} setkeywords={setkeywords}
            onChange={(e)=>setkeywords(e.target.value)} className="text-black "/><br/>
            <button type="submit" onClick={handleAdd} className="w-10 h-8 bg-white mt-3  text-black">enter</button>
            </div>         
        <div className="bg-slate-200 px-4 py-2  w-5/12 h- mt-64">
            {list.map((e,id)=>{
                return(
                    <div >
                        <input type="checkbox"/>
                        <p>{e}</p>
                       <button onClick={(e)=>handleDelete(e.target.value)}>😊</button>
                    </div> 
                )
            })}
        </div>

        </div>

    )
}
export default Search 