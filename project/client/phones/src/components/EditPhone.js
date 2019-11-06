import React from 'react';
import { serverUrl } from './../ServerSetup';
class EditPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: {},
            original: {}
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
            .then(data => {
                data.imageUrl = 'http://angular.github.io/angular-phonecat/step-14/app/' + data.imageUrl
                return Promise.resolve(data);
            })
            .then(data => this.setState({ phone: data, original: data }, () => { console.log(this.state.phone) }))
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
        console.log(this.state.phone);
        fetch(serverUrl + '/edit',{
            method: 'POST',
            body: JSON.stringify({...this.state.phone}),
            headers: {'Content-type': 'application/json'}
        }).catch(err=>console.log(err));
    }
    render() {
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
                    <input defaultValue={this.state.original.snippet} />
                    </label>
                </div>
                <div className="edit-label">
                    <label>Age
                    <input defaultValue={this.state.original.age} />
                    </label>
                </div>
                <div className="edit-label">
                    <label>ImageUrl
                    <input defaultValue={this.state.original.imageUrl} />
                    </label>
                </div>
                <button onClick={this.handleSave}>Save</button>
            </div> : 'Loading...'}
        </div>)
    }
}

export default EditPhone;