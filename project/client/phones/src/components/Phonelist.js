import React from 'react';
import Phone from './Phone';

class Phonelist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phones : []
        }
    }
    componentDidMount(){
        fetch(this.props.serverUrl + '/phones')
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