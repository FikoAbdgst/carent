import React from 'react'
import Navigation from './components/Navigation'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/four'
import Five from './components/Five'
import Six from './components/Six'
import Se7en from './components/Se7en'



const App = () => {
  return (
    <div className='w-full max-sm:h-2.1/2screen sm:h-5.1/2screen bg-white relative overflow-hidden'>
      <Navigation />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Se7en />
    </div>
  )
}

export default App