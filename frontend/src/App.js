import { useEffect } from "react";
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import {  HashRouter as Router, Route, Switch, Redirect  } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute"
import AlertTemplate from 'react-alert-template-basic'
import store from './store'

import './styles/App.css';

import { loadUser } from './actions/Auth';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import IndexPage from './components/screens/IndexPage';
import BlogsPage from './components/screens/BlogsPage';
import BlogDetailsPage from './components/screens/BlogDetailsPage';
import LoginPage from './components/screens/LoginPage';
import RegisterPage from './components/screens/RegisterPage';


const alertOptions = {
  timeout: 4000,
  position: 'bottom right'
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <Header />
          
          <Switch>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/register"><RegisterPage /></Route>

            <Route path="/blogs/:id"><BlogDetailsPage /></Route>
            <PrivateRoute exact path="/blogs" component={BlogsPage} />

            <Route exact path="/"><IndexPage /></Route>
          </Switch>
  
          <Footer />
        </Router>
      </AlertProvider>
    </Provider>

  );
}

export default App;
