 window.onload=function(){
    class Sayhi extends React.Component{
        render(){
           return <span>I am {this.props.name}</span>
        }
    }
   
    ReactDOM.render(
        <Sayhi name="赵四平"/>,
        document.querySelector("#tab1")
    )
};