import '../App.css'
import Gallery from '../components/Destinations/Gallery'
// import '../components/Destinations/Gallery.css'
import Footer from '../components/Footer'
import Commitment from '../components/Destinations/Commitment'


const Products = () => {
  return (
    <>
      <section className="destinations">
        <h1 className='page-title'>Destinations</h1>
      </section>
      <Gallery />
      <Commitment />
      <Footer />
    </>
  )
}

export default Products