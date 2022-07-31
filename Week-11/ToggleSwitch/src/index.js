import React from "react";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import reducer from "./switchToggle";

const store = createStore(reducer);

class Room extends React.Component {
  flipLight = () => {
    return this.props.dispatch({
      type: "TOGGLE",
    });
  };

  render() {
    const lightedness = this.props.lightedness ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lightedness: state,
  };
};
const RoomButton = connect(mapStateToProps)(Room);
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <RoomButton />
  </Provider>
);
