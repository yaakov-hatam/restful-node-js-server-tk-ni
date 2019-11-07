import React from 'react';
import { Redirect } from 'react-router-dom';
class AddPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            phone: {
                id: '',
                name: '',
                snippet: '',
                age: 0,
                imageUrl: ''
            }
        }
    }
    generateId = () =>{} //name remove numbers and spaces to lowercase
    handleNameChange = () => { }
    handleSnippetChange = () => { }
    handleAgeChange = () => { }
    handleImageUrlChange = () => { }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <div>
                    <h1>Add Phone</h1>
                    <label>ID
                        <input type="text" disabled={true} defaultValue={this.generateId}/>
                    </label>
                    <button>Add Phone</button>
                </div>
            )
        }
    }
}

export default AddPhone;