import '../App.css'
import Gallery from '../components/Destinations/Gallery'
// import '../components/Destinations/Gallery.css'
import Footer from '../components/Footer'
import Commitment from '../components/Destinations/Commitment'
import Sponsored from '../components/Destinations/Sponsored'


const Products = () => {
  return (
    <>
      <section className="destinations">
        <h1 className='page-title'>Destinations</h1>
      </section>
      <Gallery />
      <Commitment />
      <Sponsored />
      <Footer />
    </>
  )
}

export default Products