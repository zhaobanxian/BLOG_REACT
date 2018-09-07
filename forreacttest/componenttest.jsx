import HelloWorld from 'component/helloworld.jsx';
import Clock from 'component/clock.jsx';

window.onload = function () {
    ReactDOM.render(
        <div>
            <HelloWorld></HelloWorld>
            <Clock></Clock>
        </div>,
        document.getElementById('exp')
    )
}