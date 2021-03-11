import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import { Link, Route, Switch } from "react-router-dom";
import AlertTemplate from 'react-alert-template-basic'
import store from './store'

import './styles/App.css';

import Header from './components/layout/Header'
import IndexPage from './components/screens/IndexPage';
import BlogsPage from './components/screens/BlogsPage';
import BlogDetailsPage from './components/screens/BlogDetailsPage';
import LoginPage from './components/screens/LoginPage';


const alertOptions = {
  timeout: 4000,
  position: 'bottom right'
}

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate}
        {...alertOptions}>
          <Header />

          <Route path="/login"><LoginPage /></Route>
          <Route path="/blogs/:id"><BlogDetailsPage /></Route>
          <Route exact path="/blogs"><BlogsPage /></Route>
          <Route exact path="/"><IndexPage /></Route>
      </AlertProvider>
    </Provider>

  );
}

export default App;
