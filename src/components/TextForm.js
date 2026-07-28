import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleLoClick = () => {
    console.log("Lowercase was clicked: " + text);
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

  const handleCopy = () => {
    var textInput = document.getElementById("myBox");
    textInput.select();
    navigator.clipboard.writeText(textInput.value);
  };

  // NEW: Save text to PostgreSQL database via .NET API
  const handleSaveToDb = async () => {
    if (!text.trim()) {
      alert("Please enter some text before saving!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5116/api/texts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Analyzed Text',
          content: text,
          wordCount: text.split(/\s+/).filter((element) => element.length !== 0).length,
        }),
      });

      if (response.ok) {
        alert('Text successfully saved to PostgreSQL database!');
      } else {
        alert('Failed to save. Please check backend server.');
      }
    } catch (error) {
      console.error('Error connecting to backend API:', error);
      alert('Could not connect to .NET API server.');
    }
  };

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove space</button>
        
        {/* NEW: Green Save Button */}
        <button className="btn btn-success mx-2 my-1" onClick={handleSaveToDb}>Save to Database</button>
      </div>

      <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}