import { faSearch, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogPosts } from '../../actions/BlogPosts';
import { getSubscribedBlogPosts } from '../../actions/SubscribedBlogPosts';
import '../../styles/Filters.css';
import SortingButton from '../common/SortingButton';



const Filters = ({
    page,
    onSubscribedOnly
}) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [inputSearching, setInputSearching] = useState("")
    const [inputSorting, setInputSorting] = useState("")
    const [inputSubscribedOnly, setInputSubscribedOnly] = useState(false)
    
    const inputSearchingHandler = event => setInputSearching(event.target.value);
    const selectSortingHandler = value => setInputSorting(value)

    const getProperBlogPosts = () => {
        if (inputSubscribedOnly && auth.user) {
            dispatch(getSubscribedBlogPosts({
                page: page,
                userId: auth.user.id,
                name: inputSearching && inputSearching.length > 1 ? inputSearching : undefined,
                ordering: inputSorting,  
            }));
            onSubscribedOnly(true)
        }
        else {
            dispatch(getBlogPosts({
                page: page,
                name: inputSearching && inputSearching.length > 1 ? inputSearching : undefined,
                ordering: inputSorting
            }));
            onSubscribedOnly(false)
        }
    }

    useEffect(() => {
        getProperBlogPosts();
    }, [inputSubscribedOnly, inputSearching, inputSorting, page])

    const onClickHandler = (event) => {
        event.preventDefault();
        getProperBlogPosts();
    };

    const onChangeHandler = () => {
        setInputSubscribedOnly(!inputSubscribedOnly)
        getProperBlogPosts();
    };

  return(
    <div className='filters'>
        <div className="filters-searching">
            <div className="filters-searching-input input-group">
                <input type="search" className="form-control rounded" placeholder="Search..." aria-label="Search"
                    aria-describedby="search-addon" onChange={inputSearchingHandler} />
                <span className="input-group-text border-0">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
        </div>
        <div className="filters-subscribed-only">
            <FormControlLabel
                value="daily"
                onChange={onChangeHandler}
                control={<Checkbox color="default" />}
                label="Subscribed only"
                labelPlacement="end"
            />
        </div>
        <div className="filters-refreshing">
            <button type="button" className="refreshing-button" onClick={onClickHandler}>
                Refresh <FontAwesomeIcon icon={faSyncAlt} />
            </button>
        </div>
        <div className="filters-sorting">
            <SortingButton sortBy="date" sortName="date" onSelectSorting={selectSortingHandler} />
            <SortingButton sortBy="name" sortName="name" onSelectSorting={selectSortingHandler} />
            <SortingButton sortBy="blog__author" sortName="author" onSelectSorting={selectSortingHandler} />
            <SortingButton sortBy="blog__name" sortName="blog" onSelectSorting={selectSortingHandler} />
        </div>
    </div>

  );
}

export default Filters;
