import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import "../../styles/Register.css";


function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        // const { username, email, password, password2 } = state;
        if (password !== password2) {
            console.log('passwords wrong')
        //   this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
        } else {
          const newUser = {
            username,
            password,
            email,
          };
          this.props.register(newUser);
        }
    };

    const onChange = e => console.log(e.target.name);


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
                                    onChange={onChange}
                                    value={username}
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Email</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={onChange}
                                    value={email}
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={onChange}
                                    value={password}
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Confirm Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    name="password2"
                                    onChange={onChange}
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
    // blogs: state.blogs
});

const mapDispatchToProps = dispatch => {
    return {
        // getBlogs: ({page}) => dispatch(getBlogs(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
