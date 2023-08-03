import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

class App extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: ""
  };
  render() {
    return (
      <div className="App">
        <div className="Meta">
          <h1>Elearniv Certificates</h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p>{this.state.Name}</p>
            <img src="https://i.imgur.com/Toz3PUWh.png" alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
