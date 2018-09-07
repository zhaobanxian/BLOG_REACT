import { BrowserRouter, Route, Router, Link } 
from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
const Home = () => <div>
    <div>
        <Link to='/forreacttest/About'>About</Link>
    </div>
    <div>
        <Link to='/forreacttest/Contact'>Contact</Link>
    </div>
    <div>
        <Link to='/baidu'>Baidu</Link>
    </div>
</div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/forreacttest/" component={Home} />
                    <Route path="/forreacttest/About" component={About} />
                    <Route path="/forreacttest/Contact" component={Contact} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;