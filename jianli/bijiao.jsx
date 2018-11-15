import react from 'react';
import reactDOM from 'react-dom';
import './bijiao.css';
import ZhiNJiSuan from '../component/mathcomponent/ZhiNJiSuan.jsx';
class BoCai extends react.Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }
    componentDidMount() {
        this.refs.A_cost.value = 10;
        this.refs.B_cost.value = 10;
        this.refs.A_pl.value = 3;
        this.refs.B_pl.value = 3;
        this.updateState();
        this.setState({})
    }
    updateState() {
        this.pl1 = this.refs.A_pl.value;
        this.pl2 = this.refs.B_pl.value;
        this.costA = this.refs.A_cost.value;
        this.costB = this.refs.B_cost.value;
        this.yuqiCostB = (this.costA * (this.pl1 - 1) - 5);
        this.yuqiMoney = 5;
        if (this.pl1 && this.pl2 && this.costA && this.costB) {
            this.pl1 = parseFloat(this.pl1)
            this.pl2 = parseFloat(this.pl2)
            this.costA = parseFloat(this.costA)
            this.costB = parseFloat(this.costB)
            this.setState({})
        }
    }
    render() {
        return <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
                <div>A</div>
                <div className="rowstow">
                    <span>pl:<input ref="A_pl" type="number" onChange={this.updateState}></input></span>
                    <span>cost:<input ref="A_cost" type="number" onChange={this.updateState}></input></span>
                </div>
                <div className="rowsone">
                    <span><p>costB:{this.yuqiCostB}，预期赔率：{(this.yuqiMoney + this.costA + this.yuqiCostB) / this.yuqiCostB}</p></span>
                </div>
            </div>
            <div style={{ width: "100%", marginTop: "10px" }}>
                <div>B</div>
                <div className="rowstow">
                    <span>pl:<input ref="B_pl" type="number" onChange={this.updateState}></input></span>
                    <span>cost:<input ref="B_cost" type="number" onChange={this.updateState}></input></span>
                </div>
            </div>
            <div style={{ width: "100%", marginTop: "10px" }}>
                赔率计算:<div className="tongji">
                    <div>backA:{this.costA * this.pl1},收益:{this.costA * this.pl1 - this.costA - this.costB}</div>
                    <div>backB:{this.costB * this.pl2}，收益：{this.costB * this.pl2 - this.costA - this.costB}</div>
                    <div>totalCost:{this.costA + this.costB}</div>
                </div>
            </div>
            <ZhiNJiSuan></ZhiNJiSuan>
        </div>
    }
}
window.onload = function () {
    reactDOM.render(
        <BoCai></BoCai>,
        document.getElementById("content")
    )
}