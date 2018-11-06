import React from 'react';
import ReactDOM from 'react-dom';
import Screen_1 from './screen_1.jsx';
import Screen_2 from './screen_2.jsx';
import Screen_3 from './screen_3.jsx';
import Screen_4 from './screen_4.jsx';
import Screen_5 from './screen_5.jsx';
import './index.css'
import { Carousel } from 'antd-mobile'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.selectedIndex = 0;
    }
    componentDidMount() {
    }
    beforeChange(from, to) {
        if (this.selectedIndex != to) {
            this.selectedIndex = to;
            this.setState({});
        }
    }
    render() {
        return <div className="scroll_content">
            <div className="scroll" ref='scbox'>
                <Carousel vertical={true} dots={false} selectedIndex={this.selectedIndex} beforeChange={this.beforeChange.bind(this)}>
                    <Screen_1 iscurrent={this.selectedIndex == 0}></Screen_1>
                    <Screen_2 iscurrent={this.selectedIndex == 1}></Screen_2>
                    <Screen_3 iscurrent={this.selectedIndex == 2}></Screen_3>
                    <Screen_4 iscurrent={this.selectedIndex == 3}></Screen_4>
                    <Screen_5 iscurrent={this.selectedIndex == 4}></Screen_5>
                </Carousel>
            </div>
            {this.selectedIndex<4?<div className='updown'>
                <img src='https://dn-web-blued-cn.qbox.me/web/static/liveactivity/arrow-1b5f115f.png'></img>
            </div>:null}
        </div>
    }
}
window.onload = () => {
    ReactDOM.render(
        <Index></Index>,
        document.getElementById("content")
    )
}