const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_BLOG_DETAILS_REQUEST:
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // case GET_BLOG_DETAILS_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: '',
        //         ...action.payload,
        //     };
        // case GET_BLOG_DETAILS_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload,
        //     };
        default:
            return state;
    }
}
export default authReducer;
