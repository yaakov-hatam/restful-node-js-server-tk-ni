import React from 'react';
import PhoneSnippet from './PhoneSnippet';

class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.phoneUrl = 'http://angular.github.io/angular-phonecat/step-14/app/' + this.props.imageUrl;
        this.state = {
            open: false
        }
    }
    handleClick = () => {
        let prevState = { ...this.state };
        if (prevState.open) {
            prevState.open = false;
        } else if (!prevState.open) {
            prevState.open = true;
        }
        this.setState(prevState);
    }
    render() {
        return (<div className="phone-container" onClick={this.handleClick}>
            <div className="phone-text-container">
                <p className="phone-title">{this.props.name}</p>
            </div>
            
            <img alt={this.props.name} className="phone-img" src={this.phoneUrl} />
            {this.state.open ? <div>
              <PhoneSnippet {...this.props}/>
            </div> : ''}
        </div>)
    }
}

export default Phone;