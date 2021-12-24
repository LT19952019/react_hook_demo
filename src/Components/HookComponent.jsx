import React from "react"
import { useState } from "react"

const HookComponent = () => {

  const [counter, setCounter ] = useState(100)

  function clickHandle () {
    setCounter(2000)
  }

  return(
    <div>
      <h3>Hook形式</h3>
      <div>
      <button onClick={ clickHandle }>修改</button>
        <p>Counter:{ counter }</p>
      </div>
    </div>
  )
}

export default HookComponent