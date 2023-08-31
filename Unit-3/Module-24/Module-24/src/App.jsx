import dog from './assets/Doge-Head-PNG-Clipart.png'
import './App.css'
import { useState } from 'react'
import { puppyList } from './data.js'


function App() {
  //useState returns an array with 2 elements: getter function (puppies), and setter function
  // eslint-disable-next-line no-unused-vars
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <div>
          <img src={dog} className="dog-logo" alt="Dog logo" />
      </div>
      <div className="App">
       {puppies.map((puppy) => {
        return (      
            <p className="puppy-name" onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
            </p>
            )
       })
       }
      </div>
      {
      featPupId && (
        <div className="feature-card">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          <button onClick={() => {
            //replace FeatPupId with null to un-render feature card
            setFeatPupId(null);
          }}>Close</button>
        </div>
      )
      }
    </>
  )
}

export default App;

       