
import React from 'react';
import './screen_1.css';

export default class Screen_1 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.iscurrent=this.props.iscurrent;
        this.setState({});
    }
    componentWillReceiveProps(nextprops) {
        // if (this.props.iscurrent != nextprops.iscurrent) {
        //     this.setimg1action();
        //     this.setimg2action();
        //     this.setState({});
        // }
    }
    setimg1action() {
        if (this.props.iscurrent) {
            this.img1actionstyle = {
                animation: 'img1_action 1.5s'
            }
        } else {
            this.img1actionstyle = {
                transform: "translateY(-200%)"
            }
        }
        this.setState({});
    }
    setimg2action() {
        if (this.props.iscurrent) {
            this.img2actionstyle = {
                animation: "img2_action 1.5s"
            }
        } else {
            this.img2actionstyle = {
                transform: "translateY(200%)"
            }
        }
        this.setState({});
    }
    render() {
        return <div className="screenmain screenmain1">
            <div className='lan'>EN</div>
            <img className={this.iscurrent?'img1_action img1':'hide img1'} src="https://os4ty6tab.qnssl.com/cblued/static/m_index_logo.1ccsg2q112jiqn.png"></img>
            <img className={this.iscurrent?'img2_action img2':'hide img2'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/phone-fea27fab.png"></img>
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