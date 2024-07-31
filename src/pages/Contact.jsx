import '../App.css'
import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


const Contact = () => {
  return (
    <>
      <Banner
        pageTitle="Contact"
        banner={"contact-banner"}
      />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact