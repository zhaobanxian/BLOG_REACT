import React from 'React';
import ReactDOM from 'ReactDOM';
var list=[
    {url:"https://weibo.com",sitename:"新浪微博"},
    {url:"https://baidu.com",sitename:"万能度娘"},
    {url:"https://m.eggworld.cn",sitename:"蛋e网"},
];
var listDom=[];
list.forEach(function(item){
    listDom.push(<li><a href={item.url}>{item.sitename}</a></li>);
})
// list.map((item)=>
// <li><a href={item.url}>{item.sitename}</a></li>
// )
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