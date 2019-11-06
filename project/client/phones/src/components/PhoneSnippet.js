import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
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
                <button>Delete</button>
            </div>
        )
    }
}

export default PhoneSnippet;