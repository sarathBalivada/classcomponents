import React from 'react';  
import ReactDom from 'react-dom/client';
import Counter from './counter';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mount: true,
        }
        this.mountCounter = () => this.setState({mount: true});
        this.unMountCounter = () => this.setState({mount: false});

    }
   render() {
    return (
        <div>
            <button onClick={() => this.mountCounter()} disabled={this.state.mount}>mount</button>
            <button onClick={() => this.unMountCounter()} disabled={!this.state.mount}>Un Mount</button>
           { this.state.mount ? <Counter /> : ""}
        </div>
    )
   }
}
