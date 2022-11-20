import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {
const Button1Foo=(name:string,age:number)=>{
    console.log(name,age)
}
    const Button2Foo=(name:string, address:string)=>{
        console.log(name,address)
    }
const Button3Foo=()=>{
    console.log("Im stupid Button")
}
    return (
    <div >
        <Button name={"chanel-1"} callback={()=>Button1Foo("Im freddy", 21)}/>
        <Button name={"chanel-2"} callback={()=>Button2Foo("Im teddy","live in Minsk")}/>
        <Button name={"Stupid Button"} callback={Button3Foo}/>

    </div>
  );
}

export default App;
