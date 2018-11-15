import react from 'react';
import './JianLi.css';
/* 我的简历呀*/
export default class JianLi extends react.Component{
    constructor(props){
        super(props);
    }
    getBaseInfo(){
        return <div className="baseinfo">
            <div className="basetitle">基本信息</div>
            <div className="rowsone">
                <span>姓名：赵四平 1985年11月29日出生</span>
            </div>
            <div className="rowstow">
                <span>性别：男</span><span>工作年限：8年</span>
            </div>
            <div className="rowsone">
                <span>联系电话: 13387461821</span>
            </div>
            <div className="rowsone">
                <span>邮箱:zhaoshiping198511@163.com</span>
            </div>
            <div className="rowsone">
                <span>毕业院校：陕西师范大学</span>
            </div>
        </div>
    }
    getShortMsg(){
        return <div className="myintroduce">
            <div className='basetitle'>自我介绍</div>
            <p>10年毕业工作，直到2015年都是在bs前后端开发，前端大部分是js和jq，后端多使用aps.net</p>
            <p>2015年因为公司业务的需求，专注到webapp的前端开发，主要使用angularjs ionic框架，加上javascript进行h5和ios安卓app的开发，中间不间断的做过很多公司与会以及活动的h5页面。2018年9月开始使用reactjs对app部分进行改版。</p>
            <p>个人对新技术接受能较强，新的框架上手速度也快，过往的工作中也做了很多技术的攻坚</p>
            <p>最后附上博客园和github地址</p>
            <p style={{textIndent:'0',wordWrap:'break-word'}}>博客园：<a href="https://www.cnblogs.com/zspbolg/" target="blank">https://www.cnblogs.com/zspbolg/</a></p>
            <p style={{textIndent:'0',wordWrap:'break-word'}}>Github: <a href="https://github.com/zhaobanxian" target="blank">https://github.com/zhaobanxian</a></p>
        </div>
    }
    getWordIntroduce(){
        return <div className="wordintroduce">
            <div></div>
        </div>
    }
    render(){
        return <div>
            {this.getBaseInfo()}
            {this.getShortMsg()}
        </div>
    }
}