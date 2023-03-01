import React from 'react';  
import ReactDom from 'react-dom/client';

export default class Counter extends React.Component {
   
constructor(props) {
    console.log('constructor')
    super(props) ;
    this.state = {
        counter: 0,
    }
        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () =>  this.setState({counter: this.state.counter - 1});

}
    componentDidMount() {
        console.log("component did mount");
        console.log("---------------");
    }

    componentDidUpdate(prevProps,prevState,snapShot) {
        console.log("component did update");
        console.log("---------------"); 
    }


render() {
    console.log('render');

return (
  <div>
    <button onClick={() => this.increment()}>Increase</button>
    <button onClick={() => this.decrement()}>Decrease</button>
    <div className='counter'>
    counter : {this.state.counter}
    </div>
 
  </div>
)
}
}

