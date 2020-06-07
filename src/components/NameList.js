import React from 'react'
import Person from './Person'


const NameList = () => {
  const names=['Bruce','Clark','Diana','Diana']
 
 
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>
   )
  
  return <div>{nameList}</div>

  }  
     
    
    
export default NameList
