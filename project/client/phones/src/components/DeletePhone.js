import React from 'react';
import {serverUrl} from './../ServerSetup';
import {
    Redirect,
    Link
  } from "react-router-dom";
class DeletePhone extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phone: {},
            redirect: false
        }
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        let id = window.location.pathname.substr(8, window.location.pathname.length);
        fetch(serverUrl + '/delete/' + id)
        .then(data =>data.json())
        .then(data => this.setState({ phone: data }, () => {}))
    }

    handleDeleteClick = () =>{
        fetch(serverUrl + '/delete',{
            method:'POST',
            body:JSON.stringify({...this.state.phone}),
            headers:{'Content-type': 'application/json'}
        }).then(res=>{
            console.log(res);
            if(res.status == 200){
                let prevState = {...this.state};
                prevState.redirect = true;
                this.setState({redirect: prevState.redirect})
            }
        })
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
        else{
            return(<div>
                <h1>Are you sure you want to delete {this.state.phone.name} ? </h1>
                <button onClick={this.handleDeleteClick}>DELETE</button>
                <Link to="/">Cancel</Link>
            </div>)
        }

    }
}

export default DeletePhone;