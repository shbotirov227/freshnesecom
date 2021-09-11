import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './containers/Header';
import './assets/styles/main.scss';
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
