import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
         count: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
   };
   setNewNumber() {
      this.setState({count: this.state.count + 1})
   }
  componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
  render() {
    return (
      <div >
        <h1 className="App">Lifecycle Methods</h1>
        <ul>
        <li><b>componentWillMount</b> is executed before rendering, on both the server and the client side.</li>

        <li><b>componentDidMount</b> is executed after the first render only on the client side.
         This is where AJAX requests and DOM or state updates should occur. 
         This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval. 
         We are using it to update the state so we can trigger the other lifecycle methods.</li>

        <li><b>componentWillReceiveProps</b> is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.</li>

        <li><b>shouldComponentUpdate</b> should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.</li>

        <li><b>componentWillUpdate</b> is called just before rendering.</li>

        <li><b>componentDidUpdate</b> is called just after rendering.</li>

        <li><b>componentWillUnmount</b> is called after the component is unmounted from the dom. We are unmounting our component in App.js.</li>
        </ul>
        <div className="App">
          {this.state.count}:<button onClick = {this.setNewNumber}>INCREMENT</button></div>
          </div>
    );
  }
}

export default App;
