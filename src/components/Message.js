import React, { Component } from 'react'

class Message extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Welcome visitor'
    }
  }

  clickHandler = () => {
      this.setState({message:'Go home'})
  }
  
  
  render() {
    const {message} = this.state
    return (
      <div>
        <h1 onMouseOver={this.clickHandler}>Subscribe</h1>
        <h1> {message}</h1>
      </div>
    )
  }
}

export default Message
