//import { Router, Route, hashHistory } from 'react-router';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dt: new Date()
        }
        this.tid = setInterval(this.updatetime.bind(this), 1000);
    }
    updatetime() {
        this.setState({
            dt: new Date()
        })
    }

    endtime() {
        clearInterval(this.tid);
    }

    render() {
        return <div>{this.state.dt.toLocaleTimeString()}</div>;
    }
}


class EventClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zsp',
            sex: 'man',
            age: '32'
        }
    }
    clickHandler() {
        this.setState({
            name: '赵四平'
        })
    }
    render() {
        console.log("render")
        return <div>
            <p onClick={this.clickHandler.bind(this)}>
                大家好，我是{this.state.name},今年{this.state.age}岁，{this.state.sex}
            </p>
            <p>
                我的属性是{this.props.data.name},dt:{this.props.data.dt}
            </p>
        </div>
    }
    componentDidMount(){
        this.props.data.name="didMount";
    }
}

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    render() {
      var value = this.state.value;
      return <div>
              <input ref="ipt" type="text" value={value} onChange={this.handleChange} /> 
              <h4 ref='hf'>{value}</h4>
             </div>;
    }
  }

window.onload = function () {
    // ReactDOM.render(
    //     <Router history={hashHistory}>
    //         <Route path='/Counter' component={Counter}></Route>,
    //         <Route path='/HelloMessage' component={HelloMessage}></Route>
    //     </Router>,
    //     document.getElementById('rt')
    // )
    // ReactDOM.render(
    //     <Counter />,
    //     document.getElementById('exp')
    // )
    // var name='初始属性';
    // var model={
    //     name:"初始值",
    //     dt:'20180905'
    // }

    // window.rdEventClass = ReactDOM.render(
    //     <EventClass data={model}/>,
    //     document.getElementById('zsp')
    // )
    // this.setTimeout(function(){
    //     //model.name="forceUpadte";
    //     //window.rdEventClass.forceUpdate();
    //     console.log(model)
    // },2000)

    // window.helloReact= ReactDOM.render(
    //     <HelloMessage/>,
    //     document.getElementById('msg')
    // );
}