import {Component} from 'react';
import './screen_2.css';
export default class Screen_2 extends Component{
    constructor(props){
        super(props);
        this.img1actionstyle={
            transform:""
        }
    }
    render(){
        return <div className='screenmain2'>
            <img className={this.props.iscurrent?'img1_action img1':'img1'} style={this.img1actionstyle} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/title01-3456f5f8.png" alt=""/>
            <img className={this.props.iscurrent?'img2_action img2':'img2'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/location-059b4552.png" alt=""/>
        </div>
    }
}