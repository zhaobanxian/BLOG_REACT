
import React from 'react';
import './screen_1.css';

export default class Screen_1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="screenmain screenmain1">
            <div className='lan'>EN</div>
            <img className={this.props.iscurrent?'img1_action img1':'img1 hide'} src="https://os4ty6tab.qnssl.com/cblued/static/m_index_logo.1ccsg2q112jiqn.png"></img>
            <img className={this.props.iscurrent?'img2_action img2':'img2 hide'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/phone-fea27fab.png"></img>
            <div className="dibu_mnue">
                <ul className="set_ul">
                    <li><a>立即下载</a></li>
                    <li><a>软件介绍</a></li>
                    <li><a>公司简介</a></li>
                    <li><a>联系我们</a></li>
                </ul>
            </div>
            <div></div>
        </div>
    }
}