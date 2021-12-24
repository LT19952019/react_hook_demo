import React, { Component } from 'react'

export default class ClassComponent extends Component {

  constructor() {
    super()
    this.state = {
      counter:100,
      lists:[
        {
          id:1001,
          name:'sss'
        },
        {
          id:1002,
          name:'ssss'
        }
      ]
    }
  }
  clickHandle = () =>{
    this.setState({
      counter: 1000
    })
  }
  render() {

    const { counter, lists } = this.state
    return (
      <div>
        <h3>Class形式</h3>
        <div>
          <button onClick={ this.clickHandle}>修改</button>
          <p>Counter:{ counter }</p>
          <ul>
            {
              lists.map((ele, index) =>{
                return <li key={index}>{ele.name}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
