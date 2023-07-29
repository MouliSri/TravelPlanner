import React from 'react'
import  Lottie  from "lottie-react"
import TravelAnimation from "../assets/TravelAnimation.json"
import { Slide } from "react-awesome-reveal";
import Footer from "../Components/Footer"
import Card from "../Components/Card"

const Home = () => {
  return (
    <div>
    <Slide direction='bottom-left'>
    <div className="h-screen flex flex-col items-center justify-center mt-10">
    <h1 className="text-5xl text-center font-extrabold text-teal-700 mb-10">Explore the World</h1>
    <h2 className="text-2xl  text-teal-800 text-center mb-10">Travel makes you realize that no matter how much you know , <br/>there's always more to learn</h2>
   <Lottie className="object-none h-96 w-96 "  loop={true} animationData={TravelAnimation} />
  
</div>
</Slide>

<Card/>
<Footer/>
</div>
  )
}

export default Home