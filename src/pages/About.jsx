import React, { Component } from 'react'
import EffectCompontent from '../Components/EffectComponent'
import HookComponent from '../Components/HookComponent'
import UseEffectHookCompontent from '../Components/useEffectHookCompontent'

export default class About extends Component {
  render() {
    return (
      <div>
        <HookComponent/>
        <UseEffectHookCompontent />
        <EffectCompontent/>
      </div>
    )
  }
}
