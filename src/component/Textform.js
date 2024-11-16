import React, {useState} from 'react'      //used rfc for react functional component , line 1-4
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-regular-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
export default function Textform(props) {
    

    const Upclick = ()=>{
        setText(text.toUpperCase());
        props.showc("Text is converted to UPPERCASE", "success");
    }
    const Lowclick = ()=>{
        setText(text.toLowerCase());
        props.showc("Text is converted to lowercase", "success");
    }
    const Reset = ()=>{
        setText("");
        props.showc("All Text Cleared!", "danger");
       
    }
    const Onchange = (event)=>{
        setText(event.target.value)
    }
    const copyFun = (event)=>{
        const textarea = document.getElementById("my-box");
        navigator.clipboard.writeText(textarea.value)
        props.showc("Copied to Clipboard", "success");
    }
    const pastFun = ()=>{
        props.showc("Text Pasted", "success");
    }
    const capitalije =()=>{
        let lowText=text.toLowerCase();
        let ntext=lowText.charAt(0).toUpperCase();
        for(let i=1; i<lowText.length; i++){
            if (lowText[i - 1] === " " ) {
                ntext += lowText.charAt(i).toUpperCase();
            } else {
                ntext += lowText.charAt(i);
            }
        }
        setText(ntext);
        props.showc("Text is Capitalized", "success");
    }

    const[text, setText]=useState('');


    return (
        <div className="mb-3" >
            <h3>{props.header}</h3>
            <div >
                <textarea className={`form-control border border-primary rounded-end-4 d-flex justify-content-end"  ${props.mode === 'dark' ? 'dark-mode' : 'light-mode'}`} value={text} onChange={Onchange} id="my-box" rows="8"></textarea>
                <div className='d-flex justify-content-end my-2 '>
                    <FontAwesomeIcon icon= {faCopy} onClick={copyFun} className='mx-3 icon-hover '  />
                    <FontAwesomeIcon icon={faClipboard} onClick={pastFun} className="mx-3 icon-hover" />
                </div>
            </div>
            <button type="button" className="btn btn-info mx-2 icon-hover" onClick={Upclick}>toUpperCase</button>
            <button type="button" className="btn btn-info mx-2 icon-hover" onClick={Lowclick}>tolowercase</button>
            <button type="button" className="btn btn-info mx-2 icon-hover" onClick={capitalije}>Capitalize</button>
            <button type="button" className="btn btn-info mx-2  icon-hover" onClick={Reset}>Reset</button>
        </div>
  )
}
