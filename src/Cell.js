import React, { Component } from 'react';
import getColor from './Matrix'

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  handleClick = () => {
    // Why no work
    const nextColor = getColor()
    this.setState({color: nextColor})
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }
  
}
