import React from "react";

function Output({ powerOn, outputText }){
return(
    <div className="w-[400px] rounded-lg bg-slate-500 h-[100px] text-black flex  justify-center">
         <div>
            {powerOn ?  <div>{outputText} </div> : ""}
            </div>
    </div>
)
}
export default Output