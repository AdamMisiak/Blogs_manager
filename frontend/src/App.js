import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import store from './store'

import './styles/App.css';

import { loadUser } from './actions/Auth';

import PrivateRoute from "./components/common/PrivateRoute"
import Header from './components/layout/Header'
import Alerts from "./components/layout/Alerts";
import Footer from './components/layout/Footer'
import IndexPage from './components/screens/IndexPage';
import AccountPage from './components/screens/AccountPage';
import BlogsPage from './components/screens/BlogsPage';
import BlogDetailsPage from './components/screens/BlogDetailsPage';
import LoginPage from './components/screens/LoginPage';
import RegisterPage from './components/screens/RegisterPage';


const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <div className="app">
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Header />
          <Alerts />

            <Route path="/login"><LoginPage /></Route>
            <Route path="/register"><RegisterPage /></Route>
            <PrivateRoute exact path="/account" component={AccountPage} />
            <Route path="/blogs/:id"><BlogDetailsPage /></Route>
            <PrivateRoute exact path="/blogs" component={BlogsPage} />
            <Route exact path="/"><IndexPage /></Route>
            
          <Footer />
        </AlertProvider>
      </Provider>
    </div>
    

  );
}

export default App;
