import React,{useState} from "react";
import Output from './Output';
import style from "./Input.module.css";


function Calinput(){
    const [powerOn, setPowerOn] = useState(false);
    const [outputText,setOutputText]=useState("0");

const handleResult = () => {
   
    const arr = outputText.split("");
    const res = [];
    let left = "";
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])){
        res.push(Number(left));
        res.push(arr[i]);
        left = "";
        continue;
      }
      left += arr[i];

    }
    res.push(Number(left));
    console.log(res);
    let ans = 0;
    ans += res[0];
    for (let i = 1; i < res.length; i += 2) {
      switch(res[i]){
        case "+":
            ans=ans+res[i+1]
break;
case "-":
    ans=ans -res[i+1]
    break;
    case "/":
        ans=ans/res[i+1]
        break;
        case "*":
            ans=ans*res[i+1]
            break;

        }
        console.log(ans)
        setOutputText(ans)
    
    }
    setOutputText(ans);
  };

    return(

        
        <div >
            
            <Output powerOn={powerOn} outputText={outputText} />
            <div className={style.container}>
            <div className={style.btn} onClick={() => setPowerOn(!powerOn)}>  {powerOn ? "Off" : "On"}</div>
            <div className={style.btn}  onClick={() => setOutputText("0")}>c</div>
            <div className={style.btn}  onClick={(e)=>{
const abc=outputText.split("")
abc.pop()
setOutputText(abc.join(""));
            }
        
            }>del</div>
            <div className={style.btn}   onClick={(e) => setOutputText(outputText + e.target.innerText)}>0</div>
        
            
            <div className={style.btn}  
            onClick={(e) => setOutputText(outputText + e.target.innerText)}>
                +</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>7</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>8</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>9</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>-</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>4</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>5</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>6</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>*</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>1</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>2</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>3</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>/</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>%</div>
            <div className={style.btn}  onClick={(e) => setOutputText(outputText + e.target.innerText)}>.</div>
            <div className={style.btn}  onClick={handleResult}>=</div>
        
            </div>
            
        </div>
    )
}
export default Calinput