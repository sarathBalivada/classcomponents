import React from 'react';  
import ReactDom from 'react-dom/client';
import Counter from './counter';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mount: true,
            ignoreProp: 0,
            seed: 30,
            showErrorComponenet: false,
        }
        this.mountCounter = () => this.setState({mount: true});
        this.unMountCounter = () => this.setState({mount: false});
        
        this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
        this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random() * 100) });
        this.toggleError = () => this.setState({ showErrorComponenet: !this.state.showErrorComponenet });
    }
   render() {
    return (
        <div>
            <button onClick={this.mountCounter} disabled={this.state.mount}>mount</button>
            <button onClick={this.unMountCounter} disabled={!this.state.mount}>Un Mount</button>
            <button onClick={this.ignoreProp}>Ignore Prop</button>
            <button onClick={this.seedGenerator}>Generate Seed</button>
            <button onClick={this.toggleError}>Toggle error</button>
           { this.state.mount ? 
           <Counter
           ignoreProp={this.state.ignoreProp} 
           seed={this.state.seed}
           showErrorComponenet={this.state.showErrorComponenet} /> : 
           null }
        </div>
    )
   }
}
