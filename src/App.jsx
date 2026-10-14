import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>我的第一个React页面</h1>
      <p>计数器：{count}</p>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
    </>
  )
}

export default App
