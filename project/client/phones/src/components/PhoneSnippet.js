import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DeletePopup from './DeletePhone';
class PhoneSnippet extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="phone-snippet">
                <div className="phone-middle-line" />
                {this.props.snippet}

               <Link to={"/edit/" + this.props.id}>Edit</Link>
               <Link to={"/delete/" + this.props.id}>Delete</Link>
            </div>
        )
    }
}

export default PhoneSnippet;