import React, { Component } from 'react'

class Lifecycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Vishwas'
    }
    console.log('LifecycleA constrructor');
  }

   componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null
  }

 
  
  render() {
    console.log('lifecycleA render');
    return (
      <div>
        LifecycleA
      </div>
    )
  }
}

export default Lifecycle
