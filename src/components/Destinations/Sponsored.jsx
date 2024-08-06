import './Sponsored.css'

const Sponsored = () => {
  return (
    <section className='sponsored-wrapper'>
      <h2 className='sponsored-heading'>Sponsored Vacations</h2>
      <section className="sponsored-section">
        <div className="sponsored-div">
          <div className="sponsored-info tours-sponsor">
            <h3 className="sponsored-title">Tours</h3>
            <p className='sponsored-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusantium tempora?</p>
          </div>
        </div>
        <div className="sponsored-div">
          <div className="sponsored-info couples-sponsor">
            <h3 className="sponsored-title">Couples</h3>
            <p className='sponsored-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit sit dolor amet.</p>
          </div>
        </div>
        <div className="sponsored-div">
          <div className="sponsored-info relax-sponsor">
            <h3 className="sponsored-title">Relax</h3>
            <p className='sponsored-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil exercitationem.</p>
          </div>
        </div>
        <div className="sponsored-div">
          <div className="sponsored-info cruise-sponsor">
            <h3 className="sponsored-title">Cruise</h3>
            <p className='sponsored-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione.</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Sponsored