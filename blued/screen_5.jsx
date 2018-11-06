import {Component} from 'react';
import './screen_5.css';
export default class Screen_5 extends Component{
    constructor(props) {
        super(props);
        this.sethide();
    }
    componentDidMount() {
        if (!this.props.iscurrent) {
            this.sethide();
            this.setState({});
        } else {
            this.setanimation();
        }
    }
    componentWillReceiveProps(nextprops) {
        if (!nextprops.iscurrent) {
            this.sethide();
        } else {
            this.setanimation();
        }
    }
    sethide(){
        this.img1style = { visibility: 'hidden' }
        this.img2style = { visibility: 'hidden' }
        this.img3style = { visibility: 'hidden' }
    }
    setanimation(){
        setTimeout(() => {
            this.img1style = {
                animation: 'screen5_img1_action 0.8s',
            }
            this.img2style = {
                animation: 'screen5_img2_action 0.8s',
            }
            this.img3style = {
                animation: 'screen5_img3_action 0.8s',
            }
            this.setState({});
        }, 500)
    }
    render(){
        return <div className='screenmain5'>
            <img className={this.props.iscurrent?'img1_action img1':'img1 hide'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/title04-4a83150a.png" alt=""/>
            <img className={this.props.iscurrent?'img2_action img2':'img2 hide'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/left-54bfa295.png" alt=""/>
            <img className={this.props.iscurrent?'img3_action img3':'img3 hide'} src="https://dn-web-blued-cn.qbox.me/web/static/liveactivity/right-d75e8ade.png" alt=""/>
        </div>
    }
}