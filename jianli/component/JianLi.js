import react from 'react';
import './JianLi.css';
/* 我的简历呀*/
export default class JianLi extends react.Component {
    constructor(props) {
        super(props);
    }
    getBaseInfo() {
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
    getShortMsg() {
        return <div className="myintroduce">
            <div className='basetitle'>自我介绍</div>
            <p>10年毕业工作，直到2015年都是在bs前后端开发，前端大部分是js和jq，后端多使用aps.net</p>
            <p>2015年因为公司业务的需求，专注到webapp的前端开发，主要使用angularjs ionic框架，加上javascript进行h5和ios安卓app的开发，中间不间断的做过很多公司与会以及活动的h5页面。2018年9月开始使用reactjs对app部分进行改版。</p>
            <p>个人对新技术接受能较强，新的框架上手速度也快，过往的工作中也做了很多技术的攻坚</p>
            <p>最后附上博客园和github地址</p>
            <p style={{ textIndent: '0', wordWrap: 'break-word' }}>博客园：<a href="https://www.cnblogs.com/zspbolg/" target="blank">https://www.cnblogs.com/zspbolg/</a></p>
            <p style={{ textIndent: '0', wordWrap: 'break-word' }}>Github: <a href="https://github.com/zhaobanxian" target="blank">https://github.com/zhaobanxian</a></p>
        </div>
    }
    getWolkIntroduce() {
        return <div className="wolkintroduce">
            <div className='basetitle'>工作经历</div>
            <div>
                <h4>1.2010/8-2011/8 沩峰制衣有限公司管理系统</h4>
                <p>复杂公司erp项目开发，负责了物资资源管理模块的开发和维护</p>
                <p>技术栈结构：js jquery C#</p>
            </div>
            <div>
                <h4>2. 2011/9-2012/8 北京搜房网</h4>
                <p>通用组做项目二次开发，参与了广告上传、短消息、相册、商铺等项目的前后端开发</p>
                <p>技术栈结构：js jquery C#</p>
            </div>
            <div>
                <h4>3. 2012/8-2013/4 and 2014/5-2015/7 华医网</h4>
                <p>负责公司卫生培训平台的二次开发，以及一些其它的辅助工具开发</p>
                <p>技术栈结构：js jquery C# ffmepg</p>
            </div>
            <div>
                <h4>4. 2013/6-2014/4 mindland美联</h4>
                <p>负责了公司tss等项目的二次开发</p>
                <p>技术栈结构：js jquery C#</p>
            </div>
            <div>
                <h4>5. 2015/8-至今 蛋E网</h4>
                <p>主要负责webapp开发和升级，负责了从1.0开始到现在4.0版本的前端开发</p>
                <p>App部分可以在appstore搜索：蛋e网或者使用<a href="http://app.eggworld.cn/">http://app.eggworld.cn/</a> 直接下载</p>
                <p>H5部分可以直接访问<a href="http://m.eggworld.cn">http://m.eggworld.cn</a></p>
                <p>负责H5页面的开发</p>
                <p>技术栈结构：js angularjs1.0 ionic cordova h5 css3</p>
            </div>
        </div>
    }
    render() {
        return <div>
            {this.getBaseInfo()}
            {this.getShortMsg()}
            {this.getWolkIntroduce()}
        </div>
    }
}