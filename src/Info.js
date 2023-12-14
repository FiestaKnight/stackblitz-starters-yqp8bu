import * as React from "react";

class First extends React.Component {
  state = {
    First: "Loading",
    Second: "Loading",
    Third: "Loading",
    Fourth: "Loading",
    Fifth: "Loading",
    doneMessage: "Site",
  };

  constructor() {
    super();

    setTimeout(() => {
      this.setState({ First: "You" });
    }, 1000);

    setTimeout(() => {
      this.setState({ Second: "Visiting" });
    }, 2000);

    setTimeout(() => {
      this.setState({ Third: "React" });
    }, 3000);

    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        Web: state.doneMessage,
      }));
    }, 4000);
  }

  render() {
    return (
      <ul>
        {Object.keys(this.state)
          .filter((key) => key !== "doneMessage")
          .map((key) => (
            <li key={key}>
              <strong>{key}: </strong>
              {this.state[key]}
            </li>
          ))}
      </ul>
    );
  }
}

export default First;
