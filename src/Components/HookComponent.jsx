import React from "react"
import { useState, useEffect } from "react"

const HookComponent = () => {

  const [counter, setCounter ] = useState(100)
  const [list, setList] = useState([
    {
      id:1001,
      name:'sss'
    },
    {
      id:1002,
      name:'ssss'
    }
  ])
  useEffect(() =>{
    console.log("Hook组建渲染完成");

    return () => {
      console.log("hook组件即将被卸载");
    }
  }) 
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
      <ul>
        {
          list.map((ele, index) => {
            return(
              <li index={index}>
                {ele.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default HookComponent