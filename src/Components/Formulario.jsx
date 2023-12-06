import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="card">
        <form>
          <label>
            Nome:
            <input className="form-input" type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input className="form-input" type="email" name="name" />
          </label>
          <br />
          <input className="btn-enviar" type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}
