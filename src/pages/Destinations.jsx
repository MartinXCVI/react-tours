import '../App.css'
import Gallery from '../components/Destinations/Gallery'
import Footer from '../components/Footer'
import Commitment from '../components/Destinations/Commitment'
import Sponsored from '../components/Destinations/Sponsored'
import AdditionalPlaces from '../components/Destinations/AdditionalPlaces'


const Products = () => {
  return (
    <>
      <section className="destinations">
        <h1 className='page-title'>Destinations</h1>
      </section>
      <Gallery />
      <Commitment />
      <Sponsored />
      <AdditionalPlaces />
      <Footer />
    </>
  )
}

export default Products