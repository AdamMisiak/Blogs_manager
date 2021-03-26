import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { login } from '../../actions/Auth' 

import "../../styles/Login.css";


function LoginPage({ 
    login,
    auth
 }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        login(username, password)
        // const { username, email, password, password2 } = state;
        // if (password !== password2) {
        //     console.log('passwords wrong')
        //   this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
        // } else {
        //   const newUser = {
        //     username,
        //     password,
        //   };
        //   this.props.register(newUser);
        // }
    };

    const inputUsernameHandler = e => setUsername(e.target.value);
    const inputPasswordHandler = e => setPassword(e.target.value);

    if (auth.isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <section id="login" className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card-register">
                            <div className="card-header bg-primary text-white">
                                <h4>
                                <i className="fas fa-user-plus"></i> Login</h4>
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
                                {/* <form action="" method="POST">
                                    <div className="form-group">
                                        <label for="first_name">First Name</label>
                                        <input type="text" name="first_name" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" name="last_name" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" name="username" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" name="email" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="password2">Password</label>
                                        <input type="password" name="password" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Confirm Password</label>
                                        <input type="password" name="password2" className="form-control" required>
                                    </div>
                                    <input type="submit" value="Register" className="btn btn-secondary btn-block">
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, { login })(LoginPage);
