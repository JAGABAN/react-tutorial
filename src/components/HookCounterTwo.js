import React,{useState} from 'react'

const HookCounterTwo = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  
  const incrementNine = () => {
    for (let i = 0; i < 9; i++){
      setCount(previousCount=>previousCount+1)
    }
  }
  return (
    <div>
      Count:{count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(previousCount=>previousCount-1)}>Decrement</button>
      <button onClick={incrementNine}>Increment 9</button>
    </div>
  )
}

export default HookCounterTwo
