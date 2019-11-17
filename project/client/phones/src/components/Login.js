import React from 'react';
import { serverUrl } from './../ServerSetup';
import { Redirect } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            username: '',
            password: '',
            redirect: false
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleUsername = (e) => {
        let prevState = { ...this.state };
        prevState.username = e.target.value;
        this.setState(prevState);
    }
    handlePassword = (e) => {
        let prevState = { ...this.state };
        prevState.password = e.target.value;
        this.setState(prevState);
    }
    handleLogin = () => {
        fetch(serverUrl + '/auth', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'basic ' + btoa(this.state.username + ":" + this.state.password)
            }
        }).then(res => {
            this.setState({ username: '', password: '' });
            if(res.status != 403){
                res.text().then(token => {
                    window.localStorage.setItem('phones-token', token);
                    this.setState({redirect: true},()=>{});
                })
            }else{
                this.setState({error: 'error'}, console.log('error'));
            }

        })
        .catch(err => console.log(err));
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/phones" />
        } else {
            return (<div>
                <h1>Login Form</h1>
                {this.state.error ? this.state.error : ''}
                <div>
                    <label>
                        Username :
                    <input type="text" onChange={this.handleUsername} />
                    </label>
                </div>
                <div>
                    <label>
                        Password :
                    <input type="password" onChange={this.handlePassword} />
                    </label>
                </div>
                <button onClick={this.handleLogin}>Login</button>
            </div>)
        }

    }
}

export default Login;