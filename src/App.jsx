import { Suspense } from 'react'
import './App.css'
import Countries from './Compunent/Countries/countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())


function App() {

  return (
    <>
      <Suspense>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
