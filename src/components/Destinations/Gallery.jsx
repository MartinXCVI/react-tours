import './Gallery.css'
import DestCard from './DestCard'

const Gallery = () => {
  return (
    <section className="destinations-wrapper">
      <h2 className="dest-subtitle">South America Most Preferred</h2>
      <p className='dest-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam eum praesentium mollitia labore saepe cumque ratione, nam provident. Quos libero quasi possimus! Esse, explicabo temporibus. Aliquam temporibus sunt natus?</p>
      <p className='dest-text'>Dolor sit amet consectetur adipisicing elit. Alias nesciunt sit eaque delectus asperiores corrupti odit ducimus saepe, cum maxime voluptas animi distinctio totam ipsam?</p>
      <div className="destinations-gallery">
        <DestCard 
          cardBg={'amazonas-dest'}
          destName='Amazonas'
        />
        <DestCard 
          cardBg={'cartagena-dest'}
          destName='Cartagena'
        />
        <DestCard 
          cardBg={'florianopolis-dest'}
          destName='Florianopolis'
        />
        <DestCard 
          cardBg={'lima-dest'}
          destName='Lima'
        />
        <DestCard 
          cardBg={'ushuaia-dest'}
          destName='Ushuaia'
        />
        <DestCard 
          cardBg={'valdivia-dest'}
          destName='Valdivia'
        />
      </div>
    </section>
  )
}

export default Gallery