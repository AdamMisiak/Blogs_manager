import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBlogPosts } from '../../actions/BlogPosts';

import SortingButton from '../common/SortingButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Filters.css';

import { BlogPostsPageSize, DefaultPage } from "../../constants/Pagination"


const Filters = ({
    page
}) => {
    const dispatch = useDispatch();
    const [inputSearching, setInputSearching] = useState("")

    const [clicks, setClicks] = useState(0);
    
    const inputSearchingHandler = e => setInputSearching(e.target.value);

    useEffect(() => {
        if (inputSearching && inputSearching.length > 3) {
            dispatch(getBlogPosts({
                page: page,
                name: inputSearching
            }))
        } else {
            dispatch(getBlogPosts({
                page: page
            }))
        }
    }, [inputSearching, page])
    
    
  return(
    <div className='filters'>
        <div className="filters-searching">
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search..." aria-label="Search"
                    aria-describedby="search-addon" onChange={inputSearchingHandler} />
                <span className="input-group-text border-0">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
        </div>
        <div className="filters-sorting">
            <SortingButton sortBy="date" />
            <SortingButton sortBy="name" />
            <SortingButton sortBy="author" />
            <SortingButton sortBy="blog" />
        </div>
    </div>
  );
}

export default Filters;
