import App from 'component/app.jsx';

window.onload = function () {
    ReactDOM.render((
        <App></App>
    ), document.getElementById('app'))
}

function reflsh()
{
    alert("reflash")
    window.location="routertest.html";
    return false;    
}                                   