import Button from "./Button"
import './HeroSection.css'
import { BsPlayBtn } from "react-icons/bs";


const HeroSection = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src="/videos/home-video-bg.mp4" type="video/mp4" />
      </video>
      <h1>ADVENTURE AHEAD</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn-outline' buttonSize='btn-large'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn-primary' buttonSize='btn-large'>
          WATCH TRAILER <BsPlayBtn className='play-icon' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection