import { BrowserRouter, Route, Router, Link, Switch, Redirect }
    from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
const basepath = '/routertestzsp/';
const Title = () => <div className='title'>
    <div>
        <Link to={basepath + 'Home'}>Home</Link>
    </div>
    <div>
        <Link to={basepath + 'About'}>About</Link>
    </div>
    <div>
        <Link to={basepath + 'Contact'}>Contact</Link>
    </div>
    <div>
        <Link to={basepath + 'Topics'}>Topics</Link>
    </div>
    <div>
        <a href="/forreacttest/routertest.html">Back</a>
    </div>
</div>;


const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;
const Home = () => <div><h1>Home</h1></div>;
const Topic = (props) => {
    return <div>{props.match.params.msg}</div>
}
var pplist = [
    { name: 'woship1', id: 1 },
    { name: 'woship2', id: 2 },
    { name: 'woship3', id: 3 },
    { name: 'woship4', id: 4 },
]
function Topics(props) {
    var lilist = pplist.map(function (value, index, ar) {
        return <li key={value.id}>
            <Link to={basepath + 'Topics/' + value.name}>{value.name}</Link></li>
    });

    return <div>
        <ul>
            {lilist}
        </ul>
        <Route path={basepath + 'Topics/:msg'} component={Topic}></Route>
    </div>
}
const NoMatch = ({ location }) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Title></Title>
                    <Switch>
                        <Route path={basepath + 'Home'} component={Home} />
                        <Route path={basepath + 'About'} component={About} />
                        <Route path={basepath + 'Contact'} component={Contact} />
                        <Route Path={basepath + 'Topics'} component={Topics} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;