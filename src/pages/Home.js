import React from 'react'
import Navbar from '../components/header/Navbar'
import Main from '../components/main/Main'
import Hero from '../components/main/hero/Hero'


const name = "Enactus VITB"
function Home() {

  return (
    <>
      <Navbar name={name}/>
      <Hero id="home" name={name}/>
      <Main/>
    </>
  )
}

export default Home