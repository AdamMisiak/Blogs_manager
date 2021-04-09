import { useEffect } from "react";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
import { Route } from "react-router-dom";
import { loadUser } from './actions/Auth';
import PrivateRoute from "./components/common/PrivateRoute";
import Alerts from "./components/layout/Alerts";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AboutPage from "./components/screens/AboutPage";
import AccountBlogsPage from './components/screens/AccountBlogsPage';
import BlogDetailsPage from './components/screens/BlogDetailsPage';
import BlogsPage from './components/screens/BlogsPage';
import IndexPage from './components/screens/IndexPage';
import LoginPage from './components/screens/LoginPage';
import RegisterPage from './components/screens/RegisterPage';
import store from './store';
import './styles/App.css';


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
            <PrivateRoute exact path="/account/blogs" component={AccountBlogsPage} />
            <PrivateRoute exact path="/blogs" component={BlogsPage} />
            <Route path="/blogs/:id"><BlogDetailsPage /></Route>
            <Route exact path="/about"><AboutPage /></Route>
            <Route exact path="/"><IndexPage /></Route>
            
          <Footer />
        </AlertProvider>
      </Provider>
    </div>
  );
}

export default App;
