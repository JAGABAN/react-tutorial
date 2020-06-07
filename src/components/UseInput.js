import {useState} from 'react'

 const UseInput = (initialValue) => {
   const [value, setvalue] = useState(initialValue)
   const reset = () => {
     setvalue(initialValue)
   }

   const bind = {
     value,
     onChange: e => {
       setvalue(e.target.value)
     }
   }
   return[value,bind,reset]
}

export default UseInput