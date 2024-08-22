import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(1)
  })

  return (<></>)
}

export default App
