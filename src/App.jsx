Watch
import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react'

function App() {


  const [watches,setWatches] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    // fetch("watch.json")
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  

  // const watches = [
  //   {id: 1, name: 'Apple Watch', price: 1000},
  //   {id: 2, name: 'HP Watch', price: 800},
  //   {id: 3, name: 'MI Watch', price: 700},
  // ]






  return (
    <>
<h1>Vite + React</h1>
{
     watches.map(C=><Watch key={C.id}  watchProps={C} ></Watch>)
}

    </>
  )
}

export default App
