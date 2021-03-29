import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSubscribedBlogs } from '../../actions/SubscribedBlogs';

function AccountPage(){
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const user = auth.user.id

    useEffect(() => {
        dispatch(getSubscribedBlogs(user))
    }, [])
    
    console.log('test')
    return (
        <p>
            ACCOUNT PAGE
        </p>
    )
}

export default AccountPage;