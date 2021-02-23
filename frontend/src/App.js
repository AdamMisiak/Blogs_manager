import { Provider } from 'react-redux';
import store from './store'

import './styles/App.css';

import Header from './components/layout/Header'

function App() {
  return (
    <Provider store={store}>

      <Header />

    </Provider>
    
  );
}

export default App;
