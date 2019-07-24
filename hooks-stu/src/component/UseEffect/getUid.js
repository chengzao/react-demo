import React from 'react'
import { useState, useEffect } from 'react'

function GetUid() {
  let [msg, changeMsg] = useState('click me fetch api!')
  async function getData(url) { // 获取 json 数据
    return await fetch(url).then(d => d.json())
  }
  async function handleClick() { // 点击事件改变 state
    let data = await getData('https://httpbin.org/uuid').then(d => d.uuid)
    changeMsg(data)
  }
  // use
  useEffect(() => {
    document.title = msg
  })
  return (
    <div onClick={() => handleClick()}> <button>{msg}</button></div>
  )
}

export default GetUid
