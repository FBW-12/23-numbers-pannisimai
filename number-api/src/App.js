import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { API_C_REQ } from "./actions/actionTypes";

class App extends Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  getNumber = () => {
    const textnumb = this.inputField.current.value;
    this.props.onRequestNumber(textnumb);
  };

  render() {
    const { fetching, number, onRequestNumber, error, msg } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <p>asjpősjsfőfs</p>

          <p>Insert a number</p>

          <input type="text" ref={this.inputField} />

          {fetching ? (
            <button className="btn btn-warning" disabled>
              calculating
            </button>
          ) : (
            <button className="btn btn-primary" onClick={this.getNumber}>
              show info about this number
            </button>
          )}
          {error && <p style={{ color: "red" }}>:((((((((((</p>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestNumber: number => dispatch({ type: API_C_REQ, number })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
