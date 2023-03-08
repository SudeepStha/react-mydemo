import React, {useState} from 'react'


export default function TextForm(props) {
    const upperClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success")
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div>
                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>    
                    <h3>{props.heading}</h3>
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label">Enter Your Text</label>
                        <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="6" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={upperClick}>Convert To Uppercase</button>
                </div>
                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Summary</h2>
                    <p>{ text.split(" ").length} words and {text.length} charaters</p>
                <p>You can read that paragraph in {0.008 * text.split(' ').length} minutes</p>
            </div>
            </div>
           
        </>
        
    )
}
