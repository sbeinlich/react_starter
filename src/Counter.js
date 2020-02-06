import React from 'react';

class Counter extends React.Component {
  // props allows you to pass in arguments when you make an instance of this component 
  constructor(props) { 
    // Initialize immutable properties and mutable state 
    // *note* this doesn't mean to directly mutate your state, more on this later!
    super(props);
    // initialize component state
    this.state = { count: this.props.initCounter ? this.props.initCounter : 0 }
    
    // The following function is a Javascript-ism.
    // This binding is necessary to make `this` work in the callback.
    // We should use this when we create a handler or helper function
    // to handle an event. There are ways to avoid this, like using
    // arrow functions function declarations.
    this.handleClick = this.handleClick.bind(this);
  }

  // Built-in React Component lifecycle method.
  // Called whenever you mount (i.e. when this component is rendered on the DOM). 
  componentDidMount() {
    // Good time to make any necessary asynchronous requests and retrieve
    // any data needed to build this page. (Remember, we're client side dynamic now!)
    // The typical workflow here is to get data from fetch, and then call setState. 
    // You'll do this in the demo!
    console.log('Component Mounted on DOM!')
  }

  // Define a function for some special code to run when we click a button.
  handleClick(e) {
    e.preventDefault(); // Prevent button form submitting form (interrupt the normal JS event)
    console.log('user clicked!')
    this.setState({ count: this.state.count + 1})
  }

  render() {
    // Render stuff to the DOM!
    // You can access this component's state and props here too,
    // letting you print "variables"!
    return (
        <div>
            <p> Hello from the child component!</p>
            <button onClick={this.handleClick}>Click me!</button>
            <p>Count: {this.state.count}</p>
        </div>
    );
  }
}

export default Counter;
