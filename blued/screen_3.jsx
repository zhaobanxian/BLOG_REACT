import {Component} from 'react';
import './screen_3.css';
export default class Screen_3 extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className='screenmain3'>
            <img className={this.props.iscurrent?'img1_action img1':'img1 hide'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/title02-b9e30101.png" alt=""/>
            <img className={this.props.iscurrent?'img2_action img2':'img2 hide'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/dialog-b14abc3e.png" alt=""/>
        </div>
    }
}