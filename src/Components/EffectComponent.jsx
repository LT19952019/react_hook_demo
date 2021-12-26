import React, { useEffect, useState } from "react";
const TimerAPI = {
  time:"",
  subscribe(cb) {
    this.timer = setInterval(() => {
      this.time = new Date().toString();
      cb(this.time)
    },1000)
  },

  unSubscribe() {
    clearInterval(this.timer)
  }
}
const EffectCompontent = () => {

  const[showTime, setShowTime] = useState("")

  useEffect(() => {
    TimerAPI.subscribe((currenTimer) => {
      setShowTime(currenTimer);
    })
    return () => {
      TimerAPI.unSubscribe()
    }
  },)

  return(
    <div>
      <h3>清楚副作用</h3>
      <h4>{ showTime }</h4>
    </div>
  )
}

export default EffectCompontent;