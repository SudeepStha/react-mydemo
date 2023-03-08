// import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'react-router-dom';




export default function Navbar(props) {
    // const [darkStyle, setdarkStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     borderColor: '2px solid green',
    // })

    // const [btntext, setBtntext] = useState('Enter Dark Mode')

    // const toggleStyle = () => {
    //     if (darkStyle.color === 'white') {
    //         setdarkStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid green',
    //         })
    //         setBtntext("Enter Dark Mode");
    //     } else {
    //         setdarkStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid red',
    //         })
    //         setBtntext("Enter Light Mode");
    //     }
    // }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">{props.about}</a>
                        </li>
                    </ul>
                </div>
                {/* Radio buttons */}
                <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="radio" onClick={props.toggleMode} name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label text-primary" htmlFor="flexRadioDefault1">
                            Dark Mode
                        </label>
                </div>
                <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="radio" onClick={props.toggleGreen} name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label text-success" htmlFor="flexRadioDefault2">
                            Green Mode
                        </label>
                </div>
                <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="radio" onClick={props.toggleRed} name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label text-danger" htmlFor="flexRadioDefault2">
                        Red Mode
                    </label>
                </div>
                {/* switches */}
                {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleGreen} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleRed} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
                </div> */}
            </div>
        </nav>
    );
}
 
// Navbar.propTypes = {
//     title: PropTypes.string,
//     about: PropTypes.string,
//     home: PropTypes.string
// }
    
// Navbar.defaultProps = {
//     title: 'It is a default.'
// }
