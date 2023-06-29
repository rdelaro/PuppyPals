import { useState } from 'react'  
import './App.css'
import './additional.css'
import {puppyList} from './data.js'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
// console.table(puppies)
const featuredPup = puppies.find((pup)=> pup.id === featPupId)
// console.log(featuredPup)

  return (
    <>
      <div className='pup'>
      
      { 
   puppies.map((puppy) => {
     return <p 
     onClick={() => { setFeatPupId(puppy.id)}}
     key={puppy.id}>{puppy.name}</p>
   })
}


{/* { featPupId && <p>{ featPupId }</p> }  */}
{featPupId && (
        <div className='featured'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      </div>
    </>
  )
}

export default App