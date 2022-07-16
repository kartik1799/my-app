import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpClick = () => {
        if(text.length>0){
            console.log("Uppercase was clicked")
            setText(text.toUpperCase())
            {props.showAlert("Converted To Upper Case","success")}
        }
        else
        {
            {props.showAlert("Please Enter some text","warning")}
        }
        }

    const handleOnChange = (event) => {
        console.log("on Change")
        setText(event.target.value)
    }

    const handleLowerClick=()=> {
        if(text.length>0){
        console.log("Lowercase was clicked")
        setText(text.toLowerCase())
        {props.showAlert("Converted to Lower Case","success")}
        }
        else{
            {props.showAlert("Please Enter some text","warning")}
        }
    }
    const handleClearText=()=>
    {
        console.log("Cleared Text")
        setText(text.replace(text,""))
    }

    const handleCopy=()=>{
        console.log("Text Copied")
        var text=document.getElementById("myform")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpace=()=>{
        setText(text.replace(/\s{2,}/g, ' ').trim())
    }

    const [text, setText] = useState("");

  return (
    <>
    <div className='container my-3'>
        <div className="mb-3">
        <label htmlFor="myform" className={`form-label text-${props.mode=="light"?"dark":"light"}`}><h3>{props.heading}</h3></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myform" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className={`container my-3 text-${props.mode=="light"?"dark":"light"}`}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter(word => word !=="").length} words,{text.length} characters</p>
        <br/>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Enter some text to preview it."}</p>

    </div>
    </>
  )
}

TextForm.propTypes={heading:PropTypes.string}
