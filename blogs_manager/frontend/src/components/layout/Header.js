import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="{% url 'index' %}">
                        <img src="{require('static/images/logo.jpeg')}" className="logo" alt=""></img>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="{% url 'index' %}">Home <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="{% url 'blogs' %}">Blogs</a>
                            </li>

                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
                                <a className="nav-link" href="{% url 'register' %}"><i className="fas fa-user-plus"></i> Register</a>
                            </li>
                            <li className="nav-item justify-content-end">
                                <a className="nav-link" href="{% url 'login' %}"><i className="fas fa-sign-in-alt"></i> Login</a>
                            </li>
                            {/* {% endif %} */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
