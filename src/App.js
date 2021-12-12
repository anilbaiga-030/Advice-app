import React from "react";
import axios from "axios";
import "./App.css";
class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        if (error) {
          this.setState({
            advice: "Oops!please check your connection!",
          });
        }
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button onClick={this.fetchAdvice} className="btn">
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
