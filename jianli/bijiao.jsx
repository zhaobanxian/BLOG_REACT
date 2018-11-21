import react from 'react';
import reactDOM from 'react-dom';
import './bijiao.css';
import ZhiNJiSuan from '../component/mathcomponent/ZhiNJiSuan.jsx';
class BoCai extends react.Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.changeSYL = this.changeSYL.bind(this);
        this.gupiaoChange = this.gupiaoChange.bind(this);
    }
    componentDidMount() {
        this.refs.A_cost.value = 10;
        this.refs.B_cost.value = 10;
        this.refs.A_pl.value = 3;
        this.refs.B_pl.value = 3;
        this.refs.syl.value = '0.5';
        this.shouyilv = 0.5;
        this.updateState();
        this.setState({})
    }
    changeSYL() {
        this.shouyilv = parseFloat(this.refs.syl.value || '0.5');//收益率 0.5表示50%
        this.updateState();
        this.setState({})
    }
    updateState() {
        this.pl1 = this.refs.A_pl.value;
        this.pl2 = this.refs.B_pl.value;
        this.costA = this.refs.A_cost.value;
        this.costB = this.refs.B_cost.value;
        this.yuqiMoney = this.costA * this.shouyilv;//预期收益数
        this.yuqiCostB = (this.costA * (this.pl1 - 1) - this.yuqiMoney);
        if (this.pl1 && this.pl2 && this.costA && this.costB) {
            this.pl1 = parseFloat(this.pl1)
            this.pl2 = parseFloat(this.pl2)
            this.costA = parseFloat(this.costA)
            this.costB = parseFloat(this.costB)
            this.setState({})
        }
    }
    gupiaoChange() {
        let price = this.refs.price.value || 0;
        let nm = parseInt(this.refs.shou.value || 0) * 100;
        let rtModel = this.gupiaoShouXuFei(price, nm);
        this.guPiaoMsg = `购买成本${rtModel.guPiaoTatol},上涨回本价格：${rtModel.huiBenJiaGet},手续费${rtModel.shouXuFei}`;
        let rtETFModel = this.etfShouXuFei(price, nm);
        this.guPiaoETFMsg = `etf购买成本${rtETFModel.guPiaoTatol},上涨回本价格：${rtETFModel.huiBenJiaGet},手续费${rtETFModel.shouXuFei}`;
        this.setState({});
    }
    gupiaoShouXuFei(price, num) {
        let money = price * num;

        let yinHuaShui = money * 0.001;//印花税

        let jiaoYiGuiFei = money * 0.00896 * 0.01;//交易规费

        let guoHuFei = parseInt(num * 1 / 1000);//过户费 收两次
        guoHuFei = guoHuFei < 1 ? 1 * 2 : guoHuFei * 2;//

        let yongJin = money * 2.3 * 0.01 * 0.01;//佣金 收两次
        yongJin = yongJin < 5 ? 5 * 2 : yongJin * 2;

        let shouXuFei = yinHuaShui + jiaoYiGuiFei + guoHuFei + yongJin;
        return {
            guPiaoTatol: money + shouXuFei,//总费用
            shouXuFei: shouXuFei,//手续费
            huiBenJiaGet: (money + shouXuFei) / num,//回本价格
        }
    }
    etfShouXuFei(price, num) {
        let money = price * num;

        //let yinHuaShui = money * 0.001;//印花税

        //let jiaoYiGuiFei = money * 0.00896 * 0.01;//交易规费

        //let guoHuFei = parseInt(num * 1 / 1000);//过户费 收两次
        //guoHuFei = guoHuFei < 1 ? 1 * 2 : guoHuFei * 2;//

        let yongJin = money * 2.3 * 0.01 * 0.01;//佣金 收两次
        yongJin = yongJin < 5 ? 5 * 2 : yongJin * 2;

        let shouXuFei = yongJin;
        return {
            guPiaoTatol: money + shouXuFei,//总费用
            shouXuFei: shouXuFei,//手续费
            huiBenJiaGet: (money + shouXuFei) / num,//回本价格
        }
    }
    render() {
        return <div style={{ width: "100%" }}>
            <div style={{ width: "100%", textIndent: '2em' }}>syl<input type="number" ref="syl" onChange={this.changeSYL}></input></div>
            <div style={{ width: "100%" }}>
                <div>A</div>
                <div className="rowstow">
                    <span>pl:<input ref="A_pl" type="number" onChange={this.updateState}></input></span>
                    <span>cost:<input ref="A_cost" type="number" onChange={this.updateState}></input></span>
                </div>
                <div className="rowsone">
                    <span><p>costB:{this.yuqiCostB}，yuqipl：{(this.yuqiMoney + this.costA + this.yuqiCostB) / this.yuqiCostB}</p></span>
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
                pljisuan:<div className="tongji">
                    <div>backA:{this.costA * this.pl1},sy:{this.costA * this.pl1 - this.costA - this.costB}</div>
                    <div>backB:{this.costB * this.pl2}，sy：{this.costB * this.pl2 - this.costA - this.costB}</div>
                    <div>totalCost:{this.costA + this.costB}</div>
                </div>
            </div>
            <ZhiNJiSuan></ZhiNJiSuan>
            <div style={{ width: "100%", textIndent: '2em', marginTop: "10px" }}>
                <div>A股收益计算,几手？<input ref="price" type="number" onChange={this.gupiaoChange}></input>,价格：<input ref="shou" type="number" onChange={this.gupiaoChange}></input></div>
                <div style={{ width: "100%", marginTop: "10px" }}>{this.guPiaoMsg}</div>
                <div style={{ width: "100%", marginTop: "10px" }}>{this.guPiaoETFMsg}</div>
            </div>
        </div>
    }
}
window.onload = function () {
    reactDOM.render(
        <BoCai></BoCai>,
        document.getElementById("content")
    )
}