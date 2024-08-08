import '../App.css'
import Cards from '../components/Cards'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Experts from '../components/Home/Experts'


const Home = ()=> {
  return (
    <>
      <HeroSection />
      <Cards />
      <Experts />
      <Footer />
    </>
  )
}

export default Home
