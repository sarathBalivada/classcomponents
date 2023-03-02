import React from "react";


const ErrorComponent = () => <div>{props.ignore}</div>

export default class Counter extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("component did mount");
    console.log("---------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("should component update - DO NOT RENDER");
      console.log("---------------");
      return false;
    }
    console.log("should component update - RENDER");
    console.log("---------------");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {

    console.log("Get snapshot before update");
    return null;
  }

  render() {
    console.log("render");
        if (this.props.showErrorComponent &&  this.state.error) {
            console.log('error', this.state.error.message)
            return <div>We have encountered an error {this.state.error.message}</div>
        }
        console.log(this.props.showErrorComponent);
    return (
      <div>
        <button onClick={() => this.increment()}>Increase</button>
        <button onClick={() => this.decrement()}>Decrease</button>
        <div className="counter">counter : {this.state.counter}</div>
       {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("component did update");
    console.log("---------------");
  }


  componentWillUnmount() {
    console.log("component will unmount");
    console.log("---------------");
  }

  componentDidCatch(error, info) {
    console.log('component Did Catch')
    this.setState({ error,info })
  }
}
