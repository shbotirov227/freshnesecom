import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Category, Detail, Checkout, Blog, BlogDetail } from "./pages";

import "./assets/styles/main.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />                       {/* responsive full */}
          <Route exact path="/category" component={Category} />
          <Route exact path="/detail" component={Detail} />               {/* responsive full */}
          <Route exact path="/blog" component={Blog} />                   {/* responsive full */}
          <Route exact path="/blog-detail" component={BlogDetail} />      {/* responsive full */}
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
