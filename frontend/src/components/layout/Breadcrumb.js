import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Breadcrumb.css';

const Breadcrumb = ({

}) => {

  return(
    <section id="bc" className="mt-3">
        <div className="container">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#">
                      <FontAwesomeIcon icon={faHome} /> Home
                    </a>
                </li>
                <li className="breadcrumb-item active"> Latest</li>
            </ol>
            </nav>
        </div>
    </section>
  );
}

export default Breadcrumb;
