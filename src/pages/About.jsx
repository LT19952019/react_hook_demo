import React, { Component } from 'react'
import HookComponent from '../Components/HookComponent'
import useEffectHookCompontent from '../Components/useEffectHookCompontent'

export default class About extends Component {
  render() {
    return (
      <div>
        <HookComponent/>
        <useEffectHookCompontent/>
      </div>
    )
  }
}
