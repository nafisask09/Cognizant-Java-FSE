import React, { Component } from "react";

class App extends Component {

  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {

    const flight = (
      <div>
        <h2>Flight Details</h2>

        <p>Flight Name : Indigo</p>
        <p>From : Hyderabad</p>
        <p>To : Delhi</p>
        <p>Fare : ₹5000</p>
      </div>
    );

    const guestPage = (
      <div>
        <h1>Welcome Guest</h1>

        {flight}

        <button onClick={this.login}>
          Login
        </button>
      </div>
    );

    const userPage = (
      <div>
        <h1>Welcome User</h1>

        {flight}

        <button>Book Ticket</button>

        <br /><br />

        <button onClick={this.logout}>
          Logout
        </button>
      </div>
    );

    return (
      <div style={{ margin: "20px" }}>
        {this.state.isLoggedIn ? userPage : guestPage}
      </div>
    );
  }
}

export default App;