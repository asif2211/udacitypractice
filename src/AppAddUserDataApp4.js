import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./ProductList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      productItem: [],
    };
    // this.handleInput = this.handleInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = (e) => {
    this.setState(() => ({
      value: e.target.value,
    }));
  };

  // handleSubmit(event) {
  //   event.preventDefault();
  //   if(this.state.productItem === this.state.value)
  //   {
  //     this.setState({
  //       productItem:'User already exist'
  //     })
  //   }
  //   this.setState((currentState) => ({
  //     productItem: [...currentState.productItem, this.state.value],
  //   }));
  // }
  handleSubmit(event) {
    const {productItem} = this.state;
    event.preventDefault();
    if(this.state.productItem == this.state.value)
    {
      alert('product exist') 
    }
    else
    {
      this.setState((currentState) => ({
        productItem: [...currentState.productItem, this.state.value],
      }));
    }
   
  
  }
  emptyFiled = ()=>{
    return this.state.value === "";
  }
  removeProductItem = (item)=>{
    const {productItem} = this.state;
    this.setState((prevState)=>({
      productItem : prevState.productItem.filter(c=>{return c!==item}),
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <form onSubmit={(event)=>this.handleSubmit(event)}>
            <input
              type="text"
              name="product"
              placeholder="Say Something"
              value={this.state.value}
              onChange={this.handleInput}
            />
            <button disabled={this.emptyFiled()}>submit</button>
          </form>
          <p className="echo">Echo:</p>
         <ProductList productItem= {this.state.productItem} removeProduct = {this.removeProductItem}/>
           
          
        </div>
      </div>
    );
  }
}

export default App;
