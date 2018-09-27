import React, { Component } from "react";
import Dip from "react-dip";

function Component1() {
  return (
    <Dip dipId="quickStart" style={{ background: "red", height: "200px" }}>
      <div style={{ background: "gray", height: "50px" }}>some content</div>
      some other content <br />
    </Dip>
  );
}

function Component2() {
  return (
    <Dip
      dipId="quickStart"
      style={{ position: "absolute", top: "100px", background: "green" }}
    >
      <div style={{ background: "gray", height: "50px" }}>some content</div>
      some other content <br />
      etc...
    </Dip>
  );
}

// use complex state here
// or a routing solution such as react-router
// or connect it to redux, or ustated
export default class MyStatefulParent extends Component {
  state = { currentStep: 0 };
  toggleState = () =>
    this.setState(state => ({
      currentStep: (state.currentStep + 1) % 2
    }));
  render() {
    return (
      <section>
        <h1> Quick Start example </h1>
        <button onClick={this.toggleState}>toggle me</button>
        {this.state.currentStep === 0 ? <Component1 /> : <Component2 />}
      </section>
    );
  }
}
