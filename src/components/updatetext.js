import React,{useState} from "react";

function Updatetext(){
    let [grup,setName]=useState({str:"",name:"",end:""});
    function showupdate(event){
        setName({...grup,str:"Hello",name:event.target.value,end:"!"});
    }
return (
    <div>
        <h1>Enter your name :</h1>
        <input type="text" onChange={showupdate}/>
      <h1>{grup.str} {grup.name}{grup.end}</h1>
    </div>
)
}
export default Updatetext