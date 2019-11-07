import React from 'react';
import { Redirect } from 'react-router-dom';
import { serverUrl } from './../ServerSetup';
class AddPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            generatedID: '',
            idAvailable: true,
            error: '',
            phone: {
                id: '',
                name: '',
                snippet: '',
                age: 0,
                imageUrl: ''
            }
        }
        this.generateId = this.generateId.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSnippetChange = this.handleSnippetChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.updatePhoneId = this.updatePhoneId.bind(this);
    }
    generateId = (phoneName) => {//name remove numbers and spaces to lowercase
        let id = phoneName;
        id = id.toLowerCase();
        id = id.split(' ').join('-');
        this.setState({ generatedID: id});
        fetch(serverUrl + '/edit/' + id).then(res => {
            if (res.status != 200) {
                this.setState({ idAvailable: true, error: '' }, () => {this.updatePhoneId()});
            } else {
                this.setState({ idAvailable: false, error: 'ID already taken.' }, () => { });
            }
        })
    }
    updatePhoneId = () =>{
        let prevState = {...this.state};
        prevState.phone.id = prevState.generatedID;
        this.setState(prevState,()=>{})
    }
    handleNameChange = (e) => {
        let prevState = { ...this.state };
        prevState.phone.name = e.target.value;
        this.setState(prevState, () => { this.generateId(this.state.phone.name) });
    }
    handleSnippetChange = (e) => {
        let prevState = { ...this.state };
        prevState.phone.snippet = e.target.value;
        this.setState(prevState, () => { });
    }
    handleAgeChange = (e) => {
        let prevState = { ...this.state };
        prevState.phone.age = e.target.value;
        this.setState(prevState, () => { });
    }
    handleImageUrlChange = (e) => {
        let prevState = { ...this.state };
        prevState.phone.imageUrl = e.target.value;
        this.setState(prevState, () => { });
    }

    handleAddClick = () =>{
        fetch(serverUrl +'/add',{
            method: 'POST',
            body:JSON.stringify({...this.state.phone}),
            headers: {'Content-type': 'application/json'}
        }).then(res =>{
            if(res.status == 200){
                let prevState = {...this.state};
                prevState.redirect = true;
                this.setState(prevState,()=>{})
            }else{
                console.log(res);
            }
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <div>
                    <h1>Add Phone</h1>
                    <p>{this.state.error}</p>
                    <div className="add-label">
                        <label>ID
                        <input type="text" disabled={true} defaultValue={this.state.generatedID} />
                        </label>
                    </div>
                    <div className="add-label">
                        <label>Name
                        <input type="text" defaultValue={this.state.phone.name} onChange={this.handleNameChange} />
                        </label>
                    </div>
                    <div className="add-label">
                        <label>Snippet
                        <input type="text" defaultValue={this.state.phone.snippet} onChange={this.handleSnippetChange} />
                        </label>
                    </div>
                    <div className="add-label">
                        <label>Age
                        <input type="text" defaultValue={this.state.phone.age} onChange={this.handleAgeChange} />
                        </label>
                    </div>
                    <div className="add-label">
                        <label>Image Url
                        <input type="text" defaultValue={this.state.phone.imageUrl} onChange={this.handleImageUrlChange} />
                        </label>
                    </div>
                    {this.state.idAvailable ? <button onClick={this.handleAddClick}>Add Phone</button> : <button disabled={true}>Add Phone</button>}
                </div>
            )
        }
    }
}

export default AddPhone;