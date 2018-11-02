import React from 'react';
import ReactDOM from 'react-dom';
import Screen_1 from './screen_1.jsx';
import './index.css'

window.onload=()=>{
    ReactDOM.render(
        <div className="scroll_content">
            <div className="scroll">
                <Screen_1></Screen_1>
            </div>
            <div className='updown'>
                <img src='https://dn-web-blued-cn.qbox.me/web/static/liveactivity/arrow-1b5f115f.png'></img>
            </div>
        </div>,
        document.getElementById("content")
    )
}