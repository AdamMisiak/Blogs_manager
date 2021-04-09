import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBlogPosts } from '../../actions/BlogPosts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Breadcrumb.css';

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

    const onClick = (e) => {
        e.preventDefault();
        setClicks(clicks+1)

        if (clicks === 2) {
            setClicks(0)
        }
    };

    
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
                { clicks === 0 ? (
                    <button type="button" class="sorting-button" onClick={onClick}>
                        Sort by date <FontAwesomeIcon icon={faSort} />
                    </button>
                ) : ( null )}
                { clicks === 1 ? (
                    <button type="button" class="sorting-button" onClick={onClick}>
                        Sort by date <FontAwesomeIcon icon={faSortUp} />
                    </button>
                ) : (null )}
                { clicks === 2 ? (
                    <button type="button" class="sorting-button" onClick={onClick}>
                        Sort by date <FontAwesomeIcon icon={faSortDown} />
                    </button>
                ) : (null )}
                
            
            <button type="button" class="sorting-button">Sort by name</button>
            <button type="button" class="sorting-button">Sort by author</button>
            <button type="button" class="sorting-button">Sort by blog</button>
            <button type="button" class="sorting-button">Sort by genre</button>

        </div>
    </div>
  );
}

export default Filters;
