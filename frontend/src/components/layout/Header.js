import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "../../styles/Header.css";
import logo from "../../images/logo.png";

import { logout } from '../../actions/Auth'

const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    console.log('test')
    dispatch(logout())
    console.log(auth)
  };

  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/">
          <img src={logo} className="logo" alt=""></img>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          {/* <ul className="navbar-nav"> */}
            {auth.isAuthenticated ? (
              <ul className="navbar-nav">
                <li className="nav-item justify-content-end">
                  <Link className="nav-link" to="/account">
                    <FontAwesomeIcon icon={faUser} /> Account
                  </Link>
                </li>
                <li className="nav-item justify-content-end">
                  <Link onClick={handleLogout} className="nav-link" to="/">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </Link>
                </li>
              </ul>
            ) : ( 
              <ul className="navbar-nav">
                <li className="nav-item justify-content-end">
                  <Link className="nav-link" to="/register">
                    <FontAwesomeIcon icon={faUserPlus} /> Register
                  </Link>
                </li>
                <li className="nav-item justify-content-end">
                  <Link className="nav-link" to="/login">
                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                  </Link>
                </li>
              </ul>
              
             )}
            {/* {% if user.is_authenticated %}
                        <li className="nav-item justify-content-end">
                            <a className="nav-link" href="{% url 'account' %}"><i className="fas fa-user"></i> Account</a>
                        </li>
                        <li className="nav-item justify-content-end">
                            <a className="nav-link" href="{% url 'logout' %}"><i className="fas fa-sign-out-alt"></i> Logout</a>
                        </li>
                        {% else %} */}

            
            {/* {% endif %} */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
