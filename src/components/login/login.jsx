import React from "react";
import "./login.css";

const Login = () => {
  return (
    <section className="h-100">
      <header className="container h-100 w-100">
        <div className="d-flex align-items-center flex-column justify-content-center h-100 w-100">
          <div className="logo">
            <span className="big">IMS</span>
            <div className="dot"></div>
            <span className="small">solutions</span>
          </div>
          <form style={{width: "30%"}} className="d-flex flex-column">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="Enter username . . ."
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password . . ."
              />
            </div>
            <div className="form-group" style={{textAlign: "center"}}>
              <span></span>
            </div>
            <div className="form-group" style={{textAlign: "center"}}>
              <input type="submit" value="login" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </header>
    </section>
  );
};

export default Login;