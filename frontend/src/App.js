import { Provider } from 'react-redux';
import store from './store'

import './styles/App.css';

import Header from './components/layout/Header'
import Breadcrumb from './components/layout/Breadcrumb';
import IndexPage from './components/screens/IndexPage';

function App() {
  return (
    <Provider store={store}>

      <Header />
      <Breadcrumb />
      <IndexPage />

    </Provider>
    
  );
}

export default App;
