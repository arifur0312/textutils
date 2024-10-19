import React,{useState} from 'react'

export default function Textbox(props ) {
    const[text,settext]=useState("Write here")
    function UpperCase()
    {
        let newText=text.toUpperCase();
        settext(newText)
        props.showAlert("success","Converted to Uppercase");
    }
    function LowerCase()
    {
        let newText=text.toLowerCase();
        settext(newText)
        props.showAlert("success","Converted to Lowercase");
    }
    function Clear()
    {
        let newText=("");
        settext(newText);
        props.showAlert("success","Text cleared");
    }

    function handleOnChange(evt){
       settext( evt.target.value);

    }
  return (
    <>
    <div>
      <h3 style={{color:props.mode==='light'?'black':'white'}}>{props.Heading} </h3>
<div className="mb-3">
 
  <textarea className="form-control " id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.mode==='light'?'white':'#9e9e9e',color:props.mode==='light'?'black':'white'}} rows="5"></textarea>
  </div>
  <div className="Button">
    <button className="UpperCase btn btn-primary" onClick={UpperCase}>Convert Upper Case</button>
    <button className='LowerCase btn btn-primary' onClick={LowerCase}>Convert Lower Case</button>
    <button className='clear btn btn-primary' onClick={Clear}>Clear</button>
   
  </div>
  <div className='Container'>
    <p>{text.trim().split("").length} words   {text.length} characters </p>
    <p>{0.005*text.split(" ").length} minute average </p>
  </div>
</div>
   
    </>
  )
}
