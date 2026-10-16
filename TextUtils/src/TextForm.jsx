import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("hello everyone");
    const HandleUpClick = () => {
        setText(text.toUpperCase());
        props.ShowAlert("convert to upperCase", "success")
    }
    const HandleLoClick = () => {
        setText(text.toLowerCase());
    }
    const HandleOnChange = (e) => {
        setText(e.target.value)
    }
    const copyText=()=>{
        navigator.clipboard.writeText(text)
             props.ShowAlert("copied text", "success")
    }
    const RemoveSpaces = () => {
        setText(text.replace(/\s+/g, " "));
    }
    const Dlttext = () => {
        setText("");
    }
    return (
        <div>
            <div className="container" style={{ color: props.Mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea name="" id="" rows="8" value={text} style={{ backgroundColor: props.Mode === "dark" ? "white" : "#cccccc", color: props.Mode === "dark" ? "#000000" : "#000000", height: " 165px", width: "82vw" }} onChange={HandleOnChange}></textarea><br />
                    <button className="btn btn-primary" disabled={text.length == 0} onClick={HandleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-3  my-2" disabled={text.length == 0} onClick={HandleLoClick}>Convert to lowercase</button>
                    <button className='btn btn-primary' disabled={text.length == 0} onClick={RemoveSpaces}>Remove Spaces</button>
                    <button className="btn btn-primary mx-3 my-2" disabled={text.length == 0} onClick={Dlttext}>Delete text</button>
                     <button className="btn btn-primary mx-3 my-2" disabled={text.length == 0} onClick={copyText}>copy text</button>
                    <div className="container my-3">
                        <p>{text.split(/\s+/).filter(word => word.length > 0).length} words</p>
                        <p> {text.replace(/\s+/g, "").length} character in textArea</p>
                        <p>{0.008 * text.replace(/\s+/g, "").length} Minutes</p>
                    </div>
                </div>
            </div>
        </div >

    )
}
