import React from 'react';
import { Component } from 'react';

// let App = (props) => {
//     return (
//         <h1>{props.step2test}</h1>
//     )
// };

//creating a class based COMPONENT
class App extends Component {

    //Must have a Constructor
    constructor(props) {
        //Must super props up into the parent Component Class
        super(props);
        this.text = props.textcontent;
        this.state = {
            text: 'Ok this is the string for the state.',
            hasLoaded: false
        };
        this.togglehasLoaded = this.togglehasLoaded.bind(this);
    }

    handleonChange(e) {
        console.log(e.target.value);
        let text = e.target.value;
        this.setState({
            text: text,
        });
    }

    togglehasLoaded() {
        console.log(this);
        this.setState({ hasLoaded: true });
        console.log(this.state.hasLoaded);
    } 

    render() {
        console.log('Inside Render of App class');
        return (
            <React.Fragment>
                <h1>{`${this.text}${this.state.text}`}</h1>
                <h2>{this.state.text}</h2>
                <input type="text" placeholder={this.state.text} onChange={(e) => this.handleonChange(e)} />
                <button onClick={this.togglehasLoaded}>Click Me</button>
            </React.Fragment>
        );
    };
}

export default App;

