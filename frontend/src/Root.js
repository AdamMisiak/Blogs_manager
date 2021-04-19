import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; 

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

const middleware = [thunk];

export default function Root ({children, initialState = {}}) {
    // CREATED FOR TEST PURPOSE, REPLACE REDUX STORE WITH TESTING INITIAL STATE

    return (
        <BrowserRouter>
            <Provider store={
                createStore(rootReducer, 
                            initialState, 
                            composeWithDevTools(applyMiddleware(...middleware)))
            }>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    {children}
                </AlertProvider>
            </Provider>
        </BrowserRouter>
        
    );
};