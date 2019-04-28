import React, { Component } from "react";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      show: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  handleChange(event) {
    this.setState({
      show: event.target.checked
    });
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div className=" col-md-3  offset-md-5">
            <label class="switch">
              <input
                type="checkbox"
                name="show"
                checked={this.state.show}
                onChange={this.handleChange}
              />
              <span class="slider round" />
            </label>
          </div>
          <div className=" col-md-3  offset-md-5 outer rounded-circle">
            <p className="justify-content-center">{this.state.time}</p>
            <p className="justify-content-center">
              {this.state.show ? this.state.date : null}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
