import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../actions/Auth';

import Alerts from '../layout/Alerts';

import "../../styles/Register.css";


function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match')
        //   this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
        } else {
          const newUser = {
            username,
            email,
            password,
          };
          dispatch(register(newUser));
        }
    };

    const inputUsernameHandler = e => setUsername(e.target.value);
    const inputEmailHandler = e => setEmail(e.target.value);
    const inputPasswordHandler = e => setPassword(e.target.value);
    const inputPassword2Handler = e => setPassword2(e.target.value);

    if (auth.isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
        <section id="register" className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card-register">
                            <div className="card-header bg-primary text-white">
                                <h4>
                                <i className="fas fa-user-plus"></i> Register</h4>
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
                                  <label>Email</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={inputEmailHandler}
                                    value={email}
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
                                  <label>Confirm Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    name="password2"
                                    onChange={inputPassword2Handler}
                                    value={password2}
                                  />
                                </div>
                                <div className="form-group">
                                  <button type="submit" className="btn btn-primary">
                                    Register
                                  </button>
                                </div>
                                <p>
                                  Already have an account? <Link to="/login">Login</Link>
                                </p>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;