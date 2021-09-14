import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {
    Home,
    Category,
    Detail,
    Checkout
} from './pages';

import './assets/styles/main.scss';


function App() {
    return ( <
        div className = "App" >
        <
        Router >

        <
        Switch >

        <
        Route exact path = "/"
        component = { Home }
        />

        <
        Route exact path = "/category"
        component = { Category }
        /> <
        Route exact path = "/detail"
        component = { Detail }
        /> <
        Route exact path = "/checkout"
        component = { Checkout }
        />

        <
        /Switch>

        <
        /Router> <
        /div>
    );
}

export default App;