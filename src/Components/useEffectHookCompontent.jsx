import React, {useState, useEffect } from "react"
import axios from "axios"

const UseEffectHookCompontent = () => {

  const [chengpin, setChengpin] =useState({}); 
  let [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
    .then(res => {
      if(res.status === 200) {
        setChengpin(res.data.chengpinDetails[0])
      }
    })
  }, )
  function clickHandle () {
    setCount(count+1)
  }

  return(
    <div>
      <h3>useEffect应用</h3>
      <div>
        <button onClick={ clickHandle }>修改数据</button>
        <p>{ count }</p>
      </div>
      <p>{ chengpin.title }</p>
    </div>
  )
}

export default UseEffectHookCompontent