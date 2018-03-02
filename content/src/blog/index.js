// import React from 'react';
// import ReactDOM from 'react-dom';
//import {ReactDOM,React} from "blogcommon";
var list=[
    {url:"http://weibo.com",sitename:"新浪微博"},
    {url:"http://baidu.com",sitename:"万能度娘"},
    {url:"http://m.eggworld.cn",sitename:"蛋e网"},
    {url:"indexmy.html",sitename:"我的世界"},
];
var listDom=[];
list.forEach(function(item){
    listDom.push(<li key={item.sitename}><a target="_blank" href={item.url}>{item.sitename}</a></li>);
})
// listDom= list.map((item)=>
// <li><a href={item.url}>{item.sitename}</a></li>
// );
window.onload=function(){
    ReactDOM.render(
        <ul>
        {
            listDom          
        }
        </ul>,
        document.querySelector("#sitelist")
    );
}