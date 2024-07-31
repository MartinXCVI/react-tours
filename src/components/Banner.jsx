import '../App.css'


const Banner = ({ banner, pageTitle }) => {
  return (
    <section className="banner-section" id={banner}>
      <h1>{pageTitle}</h1>
    </section>
  )
}

export default Banner