import React from 'react';
import { Component } from 'react';

// let App = (props) => {
//     return (
//         <h1>{props.step2test}</h1>
//     )
// };

class App extends Component {
    constructor(props) {
        super(props);
        this.text = props.textcontent;
        this.state = {
            text: 'Ok this is the string for the state.'
        };
    }

    handleonChange(e) {
        console.log(e.target.value);
        let text = e.target.value;
        this.setState({
            text: text
        });
    }

    render() {
        console.log('Inside Render of App class');
        return (
            <React.Fragment>
                <h1>{`${this.text}${this.state.text}`}</h1>
                <h2>{this.state.text}</h2>
                <input type="text" placeholder={this.state.text} onChange={(e) => this.handleonChange(e)} />
            </React.Fragment>
        );
    };
}

export default App;

