import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { login } from '../../actions/Auth';
import "../../styles/Login.css";


function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(login(username, password));
        setUsername("")
        setPassword("")
    };

    const inputUsernameHandler = e => setUsername(e.target.value);
    const inputPasswordHandler = e => setPassword(e.target.value);

    if (auth.isAuthenticated) return <Redirect to="/" />

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card-login">
                <div className="card-header bg-primary text-white">
                    <h5>
                    <i className="fas fa-user-plus"></i> Login</h5>
                </div>
                <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={inputUsernameHandler}
                        value={username}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={inputPasswordHandler}
                        value={password}
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                    <p>
                      Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoginPage;
