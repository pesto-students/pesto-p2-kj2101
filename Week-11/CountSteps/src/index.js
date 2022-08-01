import React from "react";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import reducer from "./counterReducer";

const store = createStore(reducer);

class StepCounter extends React.Component {
  render() {
    const count = this.props.counter;
    return (
      <div className="counterContainer">
        {count}
        <br />
        <button onClick={this.props.increment}>Add a step</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () =>
      dispatch({
        type: "INCREMENT",
      }),
    reset: () =>
      dispatch({
        type: "RESET",
      }),
  };
};
const StepCounterApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepCounter);
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <StepCounterApp />
  </Provider>
);
