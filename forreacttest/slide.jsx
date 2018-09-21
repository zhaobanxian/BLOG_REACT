import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../component/slider.jsx';
import ReactIScroll from 'ReactIScroll'
//var iScroll = require('iscroll');

var dataList = [{
    linkurl: 'http://www.baidu.com',
    url: '../images/636572286992912559.png',
    id:'101'
},
{
    linkurl: '',
    url: '../images/636726036820032174.png',
    id:'102'
},
{
    linkurl: '',
    url: '../images/636572286992912559.png',
    id:'103'
},
]

var tSlider = <Slider data={dataList} autoplay='true' timespan='1'></Slider>;

var scrolllist=[];
scrolllist= datalist.concat(datalist).forEach(function(item,index){
    scrolllist.push(<div style="width:100%"><img src={item.url}></img></div>);
})

window.onload = function () {
    ReactDOM.render(
        tSlider,
        document.getElementById("exp")
    )
    ReactDom.render(
        <div>
            <ReactIScroll>
                {scrolllist}
            </ReactIScroll>
        </div>,
        document.getElementById("scrolldiv")
    )
}