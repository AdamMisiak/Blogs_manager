import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import "../../styles/Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="{% url 'index' %}">
          <img src={logo} className="logo" alt=""></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="{% url 'index' %}">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{% url 'blogs' %}">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {/* {% if user.is_authenticated %}
                        <li className="nav-item justify-content-end">
                            <a className="nav-link" href="{% url 'account' %}"><i className="fas fa-user"></i> Account</a>
                        </li>
                        <li className="nav-item justify-content-end">
                            <a className="nav-link" href="{% url 'logout' %}"><i className="fas fa-sign-out-alt"></i> Logout</a>
                        </li>
                        {% else %} */}
            <li className="nav-item justify-content-end">
              <a className="nav-link" href="{% url 'register' %}">
                <FontAwesomeIcon icon={faUserPlus} /> Register
              </a>
            </li>
            <li className="nav-item justify-content-end">
              <a className="nav-link" href="{% url 'login' %}">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </a>
            </li>
            {/* {% endif %} */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

// export default connect(mapStateToProps, { getBlogPosts })(Header);
export default Header;