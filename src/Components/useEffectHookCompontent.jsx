import React, {useState, useEffect } from "react"
import axios from "axios"

const useEffectHookCompontent = () => {

  const [chengpin, setChengpin] =useState({})

  useEffect(() => {
    axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
    .then(res.status)
  }, )

  return(
    <div>
      <h3>useEffect应用</h3>
    </div>
  )
}

export default useEffectHookCompontent