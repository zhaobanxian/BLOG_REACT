import React from 'react';
import 'component/slider.css';
var log = console.log.bind(console);

class Slider extends React.Component {
    constructor(props) {
        super(props);
        if (!props.data) {
            log("缺少参数data");
            return;
        }
        this.timespan=1;
        if(props.timespan){
            this.timespan=parseFloat(props.timespan);
            if(this.timespan<=0.7){
                this.timespan=0.7;
            }
        }
        this.cindex = 0;
    }
    handlerClick(item) {
        if (item.linkurl) {
            window.location = item.linkurl;
        }
    }
    touchstart() {
        var e = window.event;
        this.clientXBase = e.changedTouches[0].clientX;
        this.tostop();
    }
    touchend() {
        var items = document.getElementsByName("slideritem");
        if (Math.abs(this.clientXChange) > this.vwidth / 2) {
            //可以切换图片
            if (this.cindex == 0 && items.length > 1) {
                if (this.clientXChange < 0) {
                    this.cindex++;
                }
            } else if (this.cindex == items.length - 1 && items.length > 1) {
                if (this.clientXChange > 0) {
                    this.cindex--;
                }
            } else {
                if (this.clientXChange < 0) {
                    this.cindex++;
                } else {
                    this.cindex--;
                }
            }
        }
        var tsnum = this.vwidth * (0 - this.cindex);
        items.forEach(function (item) {
            item.style.transition = "transform 0.5s";
            item.style.transform = `translateX(${tsnum}PX)`;
        }.bind(this))
        setTimeout(function () {
            this.toplay();
        }.bind(this), 1000)
    }
    touchmove() {
        var e = window.event;
        this.clientXChange = e.changedTouches[0].clientX - this.clientXBase;
        this.vwidth = this.refs['slidercontent'].clientWidth;

        var slideritems = document.getElementsByName('slideritem');

        if (Math.abs(this.clientXChange) >= this.vwidth / 4) {
            if (this.clientXChange > 0 && this.cindex == 0) {
                this.clientXChange = this.vwidth / 4;
            }
            if (this.clientXChange < 0 && this.cindex == slideritems.length - 1) {
                this.clientXChange = this.vwidth / -4;
            }
        }

        var tsnum = this.vwidth * (0 - this.cindex) + this.clientXChange;
        slideritems.forEach(function (item) {
            item.style.transition = "transform 0s";
            item.style.transform = `translateX(${tsnum}px)`;
        }.bind(this))
    }
    toplay() {//启动轮播
        this.intervaltag = setInterval(function () {
            var items = document.getElementsByName("slideritem");
            if (this.cindex == items.length - 1) {
                this.cindex = 0;
            } else {
                this.cindex++;
            }
            var tsnum = this.vwidth * (0 - this.cindex);
            items.forEach(function (item) {
                item.style.transition = `transform 0.5s`;
                item.style.transform = `translateX(${tsnum}px)`;
            }.bind(this))
        }.bind(this), this.timespan*1000)
    }
    tostop() {//停止轮播
        window.clearInterval(this.intervaltag);
    }
    componentDidMount() {
        this.vwidth = this.refs['slidercontent'].clientWidth;
        var items = document.getElementsByName('slideritem');
        items.forEach(function (item) {
            item.addEventListener("touchmove", this.touchmove.bind(this));
            item.addEventListener("touchstart", this.touchstart.bind(this));
            item.addEventListener("touchend", this.touchend.bind(this));
        }.bind(this))
        if (this.props.autoplay) {
            this.toplay();
        }
    }
    getItem() {
        var items = [];
        for (let i = 0, j = this.props.data.length; i < j; i++) {
            var tmpitem = this.props.data[i];
            tmpitem.cname = 'slideimg';
            var itemstyle = {
                width: (100 / this.props.data.length) + '%'
            };
            items.push(
                <div onClick={this.handlerClick.bind(this,tmpitem)} ref={'slideitem' + tmpitem.id} style={itemstyle} name='slideritem' key={tmpitem.id} className={tmpitem.cname} onClick={this.handlerClick.bind(this, tmpitem)}>
                    <img src={tmpitem.url}></img>
                </div>
            )
        }
        var st = {
            width: (this.props.data.length * 100) + '%'
        }
        var rtitem = <div className='slidercontent' ref='slidercontent'><div ref='slidercontent' style={st}>{items}</div></div>
        return rtitem;
    }
    render() {
        return <div className='slidercontent'>{this.getItem()}</div>
    }
}

module.exports={
    Slider:Slider
}
//export default Slider;