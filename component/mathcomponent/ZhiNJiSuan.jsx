import { Component } from 'react';
import './znjs.css';
export default class ZhiNJiSuan extends Component {
    constructor(props) {
        super(props);
        this.JiSuan = this.JiSuan.bind(this);
    }
    JiSuan() {
        try {
            let cp = this.refs.cp.value;
            this.resulter = eval(cp);
            console.log(this.resulter);
            this.setState({});
            //throw "这是错误呀";
        }
        catch(e){
            console.log(e);
            this.resulter = "";
        }
    }
    render() {
        return <div>
            <div>智能计算</div>
            <div><input ref="cp" type="text" onBlur={this.JiSuan}></input></div>
            <div><span>{this.resulter}</span></div>
        </div>
    }
}