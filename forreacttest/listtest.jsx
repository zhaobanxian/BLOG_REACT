import { log } from "util";

var datalist = [
    {
        name: 'robot',
        sex: 'unkonw'
    },
    {
        name: 'robot',
        sex: 'unkonw'
    },
    {
        name: 'robot',
        sex: 'unkonw'
    },
    {
        name: 'robot',
        sex: 'unkonw'
    },
    {
        name: 'robot',
        sex: 'unkonw'
    }
]

class ListMnue extends React.Component {
    constructor(props) {
        super(props);
        this.arraylist = props.data.map((item, index) => {
            return <li key={index} onClick={this.itemclick.bind(this,item)}><p>{item.name}</p></li>;
        })
    }
    itemclick(item){
        //单项点击事件
        this.setState({dt:new Date()},function(){
            console.log(this.state);
        }.bind(this))
        
        window.event.preventDefault();
    }
    render() {
        return <ul>{this.arraylist}</ul>;
    }
}
window.onload = function () {
    ReactDOM.render(
        <ListMnue data={datalist} />,
        document.getElementById('exp')
    )
}