import react from 'react';
import reactDOM from 'react-dom';
import './bocai.css';
class BoCai extends react.Component {
    constructor(props) {
        super(props);
        
        this.bocaiModel = {
            A: {
                pl: 0,
                lr: 0,
                cost: 0,
                plChange: () => {
                    let pl = this.refs.A_pl.value;
                },
                costChange: () => {
                    let cost = this.refs.A_cost.value;
                },
                addLog: () => {
                    if (!this.refs.A_pl.value || !this.refs.A_cost.value) return;
                    this.bocaiModel.logList.push({
                        tag: "A",
                        pl: parseFloat(this.refs.A_pl.value),
                        cost: parseFloat(this.refs.A_cost.value),
                        id: this.bocaiModel.getTimeID()
                    })
                    this.bocaiModel.updateState();
                    this.setState({});//更新ui
                }
            },
            B: {
                pl: 0,
                lr: 0,
                cost: 0,
                plChange: () => {
                    console.log(window.event);
                    let pl = this.refs.B_pl.value;
                },
                costChange: () => {
                    let cost = this.refs.B_cost.value;
                },
                addLog: () => {
                    if (!this.refs.B_pl.value || !this.refs.B_cost.value) return;
                    this.bocaiModel.logList.push({
                        tag: "B",
                        pl: parseFloat(this.refs.B_pl.value),
                        cost: parseFloat(this.refs.B_cost.value),
                        id: this.bocaiModel.getTimeID()
                    })
                    this.bocaiModel.updateState();
                    this.setState({});//更新ui
                }
            },
            getTimeID: () => {
                return new Date().getTime();
            },
            logList: [],//输出日志
            updateState: () => {
                this.bocaiModel.totalA = 0;
                this.bocaiModel.totalCostA = 0;
                this.bocaiModel.totalB = 0;
                this.bocaiModel.totalCostB = 0;
                this.bocaiModel.logList.forEach((item, index) => {
                    if (item.tag == 'A') {
                        this.bocaiModel.totalA += item.pl * item.cost;
                        this.bocaiModel.totalCostA += item.cost;
                    }
                    if (item.tag == 'B') {
                        this.bocaiModel.totalB += item.pl * item.cost;
                        this.bocaiModel.totalCostB += item.cost;
                    }
                })
            },
            clear: () => {
                this.bocaiModel.totalA = 0;
                this.bocaiModel.totalCostA = 0;
                this.bocaiModel.totalB = 0;
                this.bocaiModel.totalCostB = 0;
                this.bocaiModel.logList = [];
                this.setState({});
            }
        }
        this.bocaiModel.totalA = 0;
        this.bocaiModel.totalCostA = 0;
        this.bocaiModel.totalB = 0;
        this.bocaiModel.totalCostB = 0;
    }
    componentDidMount() {
        this.refs.A_pl.value = 3;
        this.refs.A_cost.value = 10;
        this.refs.B_pl.value = 3;
        this.refs.B_cost.value = 10;
    }
    render() {
        return <div style={{ width: "100%",height:"100%",overflowY:"scroll" }}>
            <div style={{ width: "100%" }}>
                <div>A</div>
                <div className="rowstow">
                    <span>pl:<input ref="A_pl" type="number" onChange={this.bocaiModel.A.plChange}></input></span>
                    <span>cost:<input ref="A_cost" type="number" onChange={this.bocaiModel.A.costChange}></input></span>
                    <button onClick={this.bocaiModel.A.addLog}>确认</button>
                </div>
            </div>
            <div style={{ width: "100%", marginTop: "10px" }}>
                <div>B</div>
                <div className="rowstow">
                    <span>pl:<input ref="B_pl" type="number" onChange={this.bocaiModel.B.plChange}></input></span>
                    <span>cost:<input ref="B_cost" type="number" onChange={this.bocaiModel.B.costChange}></input></span>
                    <button onClick={this.bocaiModel.B.addLog}>确认</button>
                </div>
            </div>
            <div>
                <button onClick={this.bocaiModel.clear}>clear</button>
            </div>
            <div style={{ width: "100%", marginTop: "10px" }}>
                A:<div className="tongji">
                    <div>返还额:{this.bocaiModel.totalA}</div>
                    <div>投注额:{this.bocaiModel.totalCostA}</div>
                    <div>获胜收益:{this.bocaiModel.totalA - this.bocaiModel.totalCostA - this.bocaiModel.totalCostB}</div>
                    <div>回报率：{(this.bocaiModel.totalA - this.bocaiModel.totalCostA - this.bocaiModel.totalCostB) / (this.bocaiModel.totalCostA + this.bocaiModel.totalCostB)}%</div>
                </div>
                B:<div className="tongji">
                    <div>返还额:{this.bocaiModel.totalB}</div>
                    <div>投注额:{this.bocaiModel.totalCostB}</div>
                    <div>获胜收益:{this.bocaiModel.totalB - this.bocaiModel.totalCostA - this.bocaiModel.totalCostB}</div>
                    <div>回报率：{(this.bocaiModel.totalB - this.bocaiModel.totalCostA - this.bocaiModel.totalCostB) / (this.bocaiModel.totalCostA + this.bocaiModel.totalCostB)}%</div>
                </div>
                总计：<div className="tongji">
                    <div>总投注额:{this.bocaiModel.totalCostA + this.bocaiModel.totalCostB}</div>
                </div>
                logs:<div className="log">
                    {this.bocaiModel.logList.map((item, index) => {
                        return <div key={item.id}>
                            赔率:{item.pl},投注额:{item.cost},合计:{item.pl * item.cost},tag:{item.tag}
                        </div>
                    })}
                </div>
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