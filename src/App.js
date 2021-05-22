import Home from "Screens/Home";
import Category from "Screens/Category";
import {GlobalStyle} from 'App.style'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "Components/Navigation";
function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
        <Navigation />
        <Route component={Home} path="/" exact />
        <Route component={Category} path="/category" />
      </Router>
    </div>
  );
}

export default App;
