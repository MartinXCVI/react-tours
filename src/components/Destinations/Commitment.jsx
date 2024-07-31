import './Commitment.css'


const Commitment = () => {
  return (
    <section className="commit-wrapper">
      <article className="commit-art">
        <h2 className='commit-subtitle'>Our commitment</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus ea sed cum magnam dolor quos aliquam et quasi unde.</p>
        <p>We are commited in the following:</p>
        <ul className='commit-list'>
          <li className='commit-list-item'>A commitment list item</li>
          <li className='commit-list-item'>A commitment list item</li>
          <li className='commit-list-item'>A commitment list item</li>
          <li className='commit-list-item'>A commitment list item</li>
          <li className='commit-list-item'>A commitment list item</li>
          <li className='commit-list-item'>A commitment list item</li>
          <li className='commit-list-item'>A commitment list item</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, at.</p>
      </article>
      <div className="commit-fig-container">
        <figure className="commit-fig">
          <img src="/images/dest-imgs/commitment.webp" alt="" className="commit-img" />
        </figure>
      </div>

    </section>
  )
}

export default Commitment