import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'


//页面
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import Layout from 'component/layout/index.jsx';
class App extends React.Component {
    render() {
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product" component={Home} />
                    <Route exact path="/product-category" component={Home} />
                </Switch>
            </Layout>
        )
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" render={props => LayoutRouter}></Route>
                </Switch>
            </Router>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
)

