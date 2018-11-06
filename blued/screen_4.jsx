import {Component} from 'react';
import './screen_4.css';
export default class Screen_4 extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className='screenmain4'>
            <img className={this.props.iscurrent?'img1_action img1':'img1 hide'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/title03-876aff63.png" alt=""/>
            <img className={this.props.iscurrent?'img2_action img2':'img2 hide'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/content-7b4b8334.png" alt=""/>
        </div>
    }
}