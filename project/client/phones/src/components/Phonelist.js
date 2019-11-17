import React from 'react';
import Phone from './Phone';
import {serverUrl} from './../ServerSetup';
class Phonelist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phones : []
        }
    }
    componentDidMount(){
        fetch(serverUrl + '/phones',{
            method: 'GET',
            headers:{ 'Authorization': 'bearer '+ window.localStorage.getItem('phones-token')}
        })
        .then(data=> data.json())
        .then(data=> this.setState({phones: data}))
        .catch(err=>console.log(err));
    }
    render(){
        return(<div className="phone-list">
            {this.state.phones.map(phone=><Phone {...phone} key={phone.id}/>)}
        </div>)
    }
}

export default Phonelist;