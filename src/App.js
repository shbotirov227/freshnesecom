import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Category, Detail, Checkout, Blog, BlogDetail } from "./pages";

import "./assets/styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog-detail" component={BlogDetail} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
