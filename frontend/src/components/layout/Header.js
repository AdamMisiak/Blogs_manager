import { faSignInAlt, faSignOutAlt, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../../actions/Auth';
import logo from "../../images/logo.png";
import "../../styles/Header.css";


const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleLogout = event => {
    event.preventDefault();
    dispatch(logout())
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
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            {auth.isAuthenticated ? (
              <ul className="navbar-nav">
                <li onClick={handleClick} className="nav-item justify-content-end">
                  <div className='nav-link'>
                    <FontAwesomeIcon icon={faUser} /> Account
                  </div>
                </li>
                <li className="nav-item justify-content-end">
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link className="no-link" to="/account/blogs">Blogs</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Posts</MenuItem>
                  </Menu>
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
        </div>
      </nav>
    </div>
  );
};

export default Header;
