import React from 'react'
import Header from './Header'
import Quiz from './Quiz'
import Footer from './Footer'
function increase(){
    console.log("Button Clicked");
    
}

const Home = () => {
  return (
    <div>
        <Header/>
        <Quiz name={increase} />
        
        <Quiz />
        <Quiz/>
        <Footer/>

    </div>
  )
}

export default Home