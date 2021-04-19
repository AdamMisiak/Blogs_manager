import { Route } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import Alerts from "./components/layout/Alerts";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AboutPage from "./components/screens/AboutPage";
import AccountBlogsPage from './components/screens/AccountBlogsPage';
import AccountProfilePage from './components/screens/AccountProfilePage';
import BlogDetailsPage from './components/screens/BlogDetailsPage';
import BlogsPage from './components/screens/BlogsPage';
import IndexPage from './components/screens/IndexPage';
import LoginPage from './components/screens/LoginPage';
import RegisterPage from './components/screens/RegisterPage';
import './styles/App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <Alerts />

        <Route path="/login"><LoginPage /></Route>
        <Route path="/register"><RegisterPage /></Route>
        <PrivateRoute exact path="/account/profile" component={AccountProfilePage} />
        <PrivateRoute exact path="/account/blogs" component={AccountBlogsPage} />
        <PrivateRoute exact path="/blogs" component={BlogsPage} />
        <Route path="/blogs/:id"><BlogDetailsPage /></Route>
        <Route exact path="/about"><AboutPage /></Route>
        <Route exact path="/"><IndexPage /></Route>
        
      <Footer />
    </div>
  );
}

export default App;
