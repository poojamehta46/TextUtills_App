import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick = (event)=>{
        console.log("uppercase button clicked")
        setText("you have clicked on hhandleupclick" + text)
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to UpperCase!", "success")

    }
    const handleLowClick = (event)=>{
        console.log("Lowercasee button clicked")
        setText("you have clicked on hhandleLowclick" + text)
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to LowerCase!", "success")

    }
    const handleOnChange = (event)=>{
        console.log("onChange button clicked")
        setText(event.target.value)
    }
    // const handleSpellCheck = (event)=>{
    //     console.log("SpellCheck button clicked")
    //     //
    //     setText(event.target.value)
    // }
    return (
    <>
        <div className="container" style ={{color : props.mode==='dark'?'white':'grey'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="textBoxId" value = {text} 
                onChange={handleOnChange}
                style = {{backgroundColor: props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'grey'}}
                rows = "8">
            </textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>UpperCase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>LowerCase</button>
            {/* <button className='btn btn-primary mx-1' onClick={handleSpellCheck}>SpellCheck</button> */}
        </div>
        <div className="container"   style ={{color : props.mode==='dark'?'white':'grey'}}>  
            <h1 className= "my-3">your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{(0.008 * (text.split(" ").length)).toFixed(2)} Minutes read</p>
            <h1>Preview</h1>
            <p>{text.length>0? text : "Enter the text to see the preview"}</p>
        </div>
    </>
  )
}
