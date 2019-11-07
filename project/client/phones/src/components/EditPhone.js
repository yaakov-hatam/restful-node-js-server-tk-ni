import React from 'react';
import { serverUrl } from './../ServerSetup';
import { Redirect } from 'react-router-dom';
class EditPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: {},
            original: {},
            redirect: false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSnippetChange = this.handleSnippetChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    componentDidMount() {
        let id = window.location.pathname.substr(6, window.location.pathname.length);
        fetch(serverUrl + '/edit/' + id)
            .then(data => data.json())
            .then(data => this.setState({ phone: data, original: data }, () => {}))
    }

    handleNameChange = (e) => {
        let prevPhone = { ...this.state.phone };
        prevPhone.name = e.target.value;
        this.setState({ phone: prevPhone }, () => { });
    }
    handleSnippetChange = (e) => {
        let prevPhone = { ...this.state.phone };
        prevPhone.snippet = e.target.value;
        this.setState({ phone: prevPhone }, () => { });
    }
    handleAgeChange = (e) => {
        let prevPhone = { ...this.state.phone };
        prevPhone.age = e.target.value;
        this.setState({ phone: prevPhone }, () => { });
    }
    handleImageUrlChange = (e) => {
        let prevPhone = { ...this.state.phone };
        prevPhone.imageUrl = e.target.value;
        this.setState({ phone: prevPhone }, () => { });
    }
    handleSave = () => {
        fetch(serverUrl + '/edit',{
            method: 'POST',
            body: JSON.stringify({...this.state.phone}),
            headers: {
                'Content-type':'application/json'}
        }).then(res=>{
            if(res.status == 200){
                let prevState = {...this.state};
                prevState.redirect = true;
                this.setState({redirect: prevState.redirect});
            }
        })
        .catch(err=>console.log(err));
    }
    render() {
        if(this.state.redirect){
            return <Redirect to="/"/>
        }else{
        return (<div>
            {this.state.phone.name ? <div>
                <h1>Edit {this.state.original.name}</h1>
                <img src={this.state.original.imageUrl}/>
                <div className="edit-label">
                    <label>ID
                    <input defaultValue={this.state.original.id} disabled={true} />
                    </label>
                </div>
                <div className="edit-label">
                    <label>Name
                    <input defaultValue={this.state.original.name} onChange={(e) => this.handleNameChange(e)} />
                    </label>
                </div>
                <div className="edit-label">
                    <label>Snippet
                    <input defaultValue={this.state.original.snippet} onChange={(e) => this.handleSnippetChange(e)}/>
                    </label>
                </div>
                <div className="edit-label">
                    <label>Age
                    <input defaultValue={this.state.original.age} onChange={(e) => this.handleAgeChange(e)}/>
                    </label>
                </div>
                <div className="edit-label">
                    <label>ImageUrl
                    <input defaultValue={this.state.original.imageUrl} onChange={(e) => this.handleImageUrlChange(e)}/>
                    </label>
                </div>
                <button onClick={this.handleSave}>Save</button>
            </div> : 'Loading...'}
        </div>)}
    }
}

export default EditPhone;