class Clock extends React.Component {
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

export default Clock;