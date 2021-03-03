import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import { Link, Route, Switch } from "react-router-dom";
import AlertTemplate from 'react-alert-template-basic'
import store from './store'

import './styles/App.css';

import Header from './components/layout/Header'
import Breadcrumb from './components/layout/Breadcrumb';
import IndexPage from './components/screens/IndexPage';
import BlogsPage from './components/screens/BlogsPage';
import Alerts from './components/layout/Alerts';


const alertOptions = {
  timeout: 3000,
  position: 'bottom right'
}

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate}
        {...alertOptions}>
        <Header />
        {/* <Alerts /> */}
        <Breadcrumb />


        <Route path="/blogs"><BlogsPage /></Route>
        <Route exact path="/"><IndexPage /></Route>

      </AlertProvider>
    </Provider>

  );
}

export default App;
