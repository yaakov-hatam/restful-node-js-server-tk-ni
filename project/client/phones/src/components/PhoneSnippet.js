import React from 'react';

class PhoneSnippet extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="phone-snippet">
                <div className="phone-middle-line" />
                {this.props.snippet}
                <button>Edit</button><button>Delete</button>
            </div>
        )
    }
}

export default PhoneSnippet;