import React from 'react';
import {serverUrl} from './../ServerSetup';
class EditPhone extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let id = window.location.pathname.substr(6,window.location.pathname.length);
        fetch(serverUrl+'/phones/'+id)
        .then(data=>data.json())
        .then(data=>console.log(data))
    }

    render(){
        return(<div>Edit Phone</div>)
    }
}

export default EditPhone;