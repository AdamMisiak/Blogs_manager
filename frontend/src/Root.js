import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

const alertOptions = {
    timeout: 3000,
    position: 'top center'
  }

export default props => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    {props.children}
                </AlertProvider>
            </Provider>
        </BrowserRouter>
        
    );
};