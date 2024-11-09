import React, {useState} from 'react'      //used rfc for react functional component , line 1-4


export default function Textform(props) {
    const Upclick = ()=>{
        setText(text.toUpperCase());
    }
    const Lowclick = ()=>{
        setText(text.toLowerCase());
    }
    const Reset = ()=>{
        setText("");
    }
    const Onchange = (event)=>{
        setText(event.target.value)
    }

    const[text, setText]=useState('');


    return (
        <div className="mb-3">
            <h3>{props.header}</h3>
            <textarea className="form-control" value={text} onChange={Onchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button type="button" className="btn btn-outline-warning" onClick={Upclick}>toUpperCase</button>
            <button type="button" className="btn btn-outline-info mx-3" onClick={Lowclick}>tolowercase</button>
            <button type="button" className="btn btn-outline-danger " onClick={Reset}>Reset</button>
        </div>
  )
}
