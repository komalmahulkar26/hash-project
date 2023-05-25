
import './App.css'
import Search from "./Search";
// import Music from "./music";
import Input from "./Input";
// import Life from "./life";
import Calinput from './Calculator/Calinput';


function App(){
  return(
    <div >
      {/* <h1 className='text-white text-center text-2xl'>T O D O</h1> */}
    <Search/>
    <Input/>
    {/* <Music/> */}
    {/* <Life/> */}
    
    <Calinput/>

    </div>
  )
  }
  export default App