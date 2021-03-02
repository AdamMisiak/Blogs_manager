import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'l
import store from './store'

import './styles/App.css';

import Header from './components/layout/Header'
import Breadcrumb from './components/layout/Breadcrumb';
import IndexPage from './components/screens/IndexPage';


const alertOptions = {
  timeout: 3000,
  position: 'bottom right'
}

function App() {
  return (
    <Provider store={store}>
      <AlertProvider>
        <Header />
        <Breadcrumb />
        <IndexPage />
      </AlertProvider>
    </Provider>

  );
}

export default App;
