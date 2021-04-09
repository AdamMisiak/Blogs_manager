import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBlogPosts } from '../../actions/BlogPosts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';



const SortingButton = ({
    sortBy,
    onSelectSorting
}) => {
    const [clicks, setClicks] = useState(0);

    const onClick = (e) => {
        e.preventDefault();
        setClicks(clicks+1)
        if (clicks === 0) {
            onSelectSorting("-"+sortBy)
        }
        else if (clicks === 1) {
            onSelectSorting(""+sortBy)
        }
        else if (clicks === 2) {
            setClicks(0)
            onSelectSorting("")
        }
    };

    
  return(
    <button type="button" className="sorting-button" onClick={onClick}>
      {
        {
          0: <span>Sort by {sortBy} <FontAwesomeIcon icon={faSort} /></span>,
          1: <span>Sort by {sortBy} <FontAwesomeIcon icon={faSortUp} /></span>,
          2: <span>Sort by {sortBy} <FontAwesomeIcon icon={faSortDown} /></span>,
        }[clicks]
      }
    </button>
  );
}

export default SortingButton;
