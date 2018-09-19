import React from 'react';
import 'component/slider.css';
var log = console.log.bind(console);

class Slider extends React.Component {
    constructor(props) {
        super(props);
        if (!props.data) {
            log("缺少参数data");
        }
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick(item) {
        if (item.linkurl) {
            window.location = item.linkurl;
        }
    }
    touchstart(){}
    touchend(){}
    getItem() {
        var items = [];
        for (let i = 0, j = this.props.data.length; i < j; i++) {
            var tmpitem = this.props.data[i];
            tmpitem.cname='slideimg marginhide';
            if(i==0){
                tmpitem.cname='slideimg'
            }
            items.push(
                <div onTouchStart={this.touchstart.bind(this,i)} 
                onTouchEnd={this.touchend.bind(this,i)} key={tmpitem.id} className={tmpitem.cname} onClick={this.handlerClick.bind(this, tmpitem)}>
                    <img src={tmpitem.url}></img>
                </div>
            )
        }
        return items;
    }
    render() {
        return <div className='slidercontent'>{this.getItem()}</div>
    }
}

export default Slider;