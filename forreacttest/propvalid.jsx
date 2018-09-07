import React from 'react';
import ReactDOM from 'react-dom';

window.onload = function () {
  class ZSPInput extends React.Component{
      render(){
          return <h1>Hello,{this.props.name}</h1>
      }
  }

  ZSPInput.propTypes = {
    name: PropTypes.string
  }

  console.log(11)
  var rtfun = i => ({ rt: i + 1 });
  console.log(rtfun);

  var sss = '赵四平啊';
  ReactDOM.render(
    <ZSPInput name={sss} />,
    document.getElementById('exp')
  )
}