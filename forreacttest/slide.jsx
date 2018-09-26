import React from 'react';
import ReactDOM from 'react-dom';
import {Slider} from '../component/slider.jsx';

var dataList = [{
    linkurl: 'http://www.baidu.com',
    url: '../images/636572286992912559.png',
    id: '101'
},
{
    linkurl: '',
    url: '../images/636726036820032174.png',
    id: '102'
},
{
    linkurl: '',
    url: '../images/636572286992912559.png',
    id: '103'
},
]

var tSlider = <Slider data={dataList} autoplay='true' timespan='1'></Slider>;

var scrolllist = [];
scrolllist = dataList.concat(dataList).forEach(function (item, index) {
    scrolllist.push(
        <div style="width:'100%'">
            <img src={item.url}></img>
        </div>);
})
var options={
    mouseWheel: true,
    scrollbars: true
  }
window.onload = function () {
    ReactDOM.render(
        tSlider,
        document.getElementById("exp")
    )
}