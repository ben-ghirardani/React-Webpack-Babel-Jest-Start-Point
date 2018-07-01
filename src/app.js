import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor() {
        super();
        this.state = {
            placeholder: null
        };
    }

    render() {
        return(
            <div>
                Hello World!
                </div>
        )
    }

}

export default App;

const wrapper = document.getElementById("create-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;