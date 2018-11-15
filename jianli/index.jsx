import reactDOM from 'react-dom';
import JianLi from './component/JianLi';

window.onload = () => {
    reactDOM.render(
        <JianLi></JianLi>,
        document.getElementById("content")
    )
}