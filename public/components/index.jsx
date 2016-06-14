import React from 'react'
import ReactDOM from 'react-dom'
import AwesomeComponent from './awesomeComponent.jsx'

export default class APP extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World from React!</h1>
        <AwesomeComponent/>
      </div>
    );
  }
}

ReactDOM.render(<APP/>,document.getElementById('app'));
