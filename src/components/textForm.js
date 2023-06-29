import React, { useState } from "react";

const TextForm = (prop) => {
  const handleUpClick = () => {
    console.log("uppercase clicked"); 
    let newText= text.toUpperCase();
    setText(newText);
    prop.showAlert(": Converted to Uppercase", "success");
  };
  const handleDownClick = () => {
    let newText= text.toLowerCase();
    setText(newText);
    prop.showAlert(": Converted to Lowercase", "success")
  };
  const handleOnChange = (e) => {
    console.log("onChange");
    setText(e.target.value);
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <div>
      <div className={`container text-${prop.mode==='light'?'black':'white'}`}>
        <h3>{prop.heading}</h3>
        <textarea
          className={` form-control container my-3 text-${prop.mode==='light'?'black':'white'}`}
          value={text}
          rows="8"
          onChange={handleOnChange}
          style={{backgroundColor: prop.mode==='dark'?'#001f3f':'white'}}
        />
        <button
          type="submit"
          className="btn btn-primary my-3 "
          onClick={handleUpClick}
        >
          
          Covert to Uppercase
        </button>

        <button
          type="submit"
          className="btn btn-primary my-3 mx-3"
          onClick={handleDownClick}
        >
        
          Covert to Lowercase
        </button>
      </div>
      <div className={`container my-3 text-${prop.mode==='light'?'black':'white'}`}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length -1} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter some text in the textbox above to preview"}</p>
      </div>
    </div>
  );
};

export default TextForm;
