import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] =useState('');
    const [textcolor,setColor] = useState('black');
   const handleonchnage=(event)=>{
    setText(event.target.value);
}
const handleupclick=()=>{
    let newtext= text.toUpperCase();
    setText(newtext);
}
const handleloclick=()=>{
    let newtext= text.toLowerCase();
    setText(newtext);
}
const cleartext=()=>{
    let newtext= "";
    setText(newtext);
}
const colorchange=()=>{
    setColor('red');
}
const copytext=()=>{
    let textdata= document.getElementById('myBox');
    textdata.select();
    navigator.clipboard.writeText(textdata.value);
}
const handleExtraspace=()=>{
    let newtxt= text.split(/[ ]+/);
    setText(newtxt.join(" "));
}

  return (
      <>
<div className="container">
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonchnage} style={{color:textcolor}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupclick}>convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloclick}>convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={cleartext}>clear Text</button>
<button className="btn btn-primary mx-2" onClick={colorchange}>text color change</button>
<button className="btn btn-primary mx-2" onClick={copytext}>copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraspace}>Remove Extra space from Text</button>


</div>
<div className="container">
    <div className="my-3">
        <h1>Text summary</h1>
        <p> words {text.split(" ").length} , characters {text.length}</p>
        <p>{0.008*text.split(" ").length} Minutes</p>
        <h2>Previwew</h2>
        <p>{text}</p>
    </div>
</div>
</>

  )
}
