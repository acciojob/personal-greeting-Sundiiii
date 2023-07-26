import React,{useState} from "react";

function Updatetext(){
    let [grup,setName]=useState({str:"",name:"",end:""});
    function showupdate(event){
        setName({...grup,str:"Hello",name:event.target.value,end:"!"});
        // document.write("Hello "+event.target.value+"!")
    }
return (
    <div>
        <h1>Enter your name:</h1>
        <input type="text" onChange={showupdate}/>
      <p>{grup.str} {grup.name}{grup.end}</p>
    </div>
)
}
export default Updatetext