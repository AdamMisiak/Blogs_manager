import { useEffect } from "react";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { loadUser } from './actions/Auth';
import rootReducer from './reducers';

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

const middleware = [thunk];

function Root ({children, initialState = {}}) {
    // CREATED FOR TEST PURPOSE, REPLACE REDUX STORE WITH TESTING INITIAL STATE
    const store = createStore(
        rootReducer, 
        initialState, 
        composeWithDevTools(applyMiddleware(...middleware))
    )

    useEffect(() => {
        store.dispatch(loadUser())
    }, [])

    return (
        <BrowserRouter>
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    {children}
                </AlertProvider>
            </Provider>
        </BrowserRouter>
        
    );
};

export default Root;