import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBlogPosts } from '../../actions/BlogPosts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Breadcrumb.css';

import { BlogPostsPageSize, DefaultPage } from "../../constants/Pagination"


const Filters = ({
    page
}) => {
    const blogPosts = useSelector(state => state.blogPosts);
    const dispatch = useDispatch();
    const [inputSearching, setInputSearching] = useState("")
    // const [page, setPage] = useState(DefaultPage);
    
    const inputSearchingHandler = e => setInputSearching(e.target.value);

    useEffect(() => {
        if (inputSearching && inputSearching.length > 3) {
            dispatch(getBlogPosts({
                page: page,
                name: inputSearching
            }))
            // setPage(1)
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
                <span className="input-group-text border-0" id="search-addon">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
        </div>
        <div className="filters-sorting">
            SORTTTT
        </div>
    </div>
  );
}

export default Filters;
