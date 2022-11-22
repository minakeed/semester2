import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: "",
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    this.setState({ error: error });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1 className="great">Number greater than 1000</h1>;
          <div className="error">
            <a
              href="/"
              style={{
                backgroundColor: "black",
                padding: "10px",
                color: "white",
                fontSize: "19px",
                textDecoration:"none",
              }}
            >
              Go back
            </a>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
