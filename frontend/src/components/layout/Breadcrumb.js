import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Breadcrumb.css';

const Breadcrumb = ({
  current
}) => {

  return(
    <section id="bc" className="mt-3">
        <div className="container">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <FontAwesomeIcon icon={faHome} /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                   {current}
                </li>
            </ol>
            </nav>
        </div>
    </section>
  );
}

export default Breadcrumb;
