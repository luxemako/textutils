import React, { useState } from 'react';

export default function TextForm(props) {
 
  const [text, setText] = useState('');


  const handleLoClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

   const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  
   const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
};
  

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = (event) => {
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove space</button>

    </div>
    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h2>Previw</h2>
        <p>{text}</p>
    </div>

    </>
  );
}