import './Commitment.css'
import { FaCheck } from "react-icons/fa";

const Commitment = () => {
  return (
    <section className="commit-wrapper">
      <article className="commit-art">
        <h2 className='commit-subtitle'>Our commitment</h2>
        <hr className='commit-subtitle-line' />
        <p>We are commited in the following:</p>
        <ul className='commit-list'>
          <li className='commit-list-item'><FaCheck className='green-check' /> <strong>Unforgettable Experiences</strong> - We promise to provide unique and memorable tours tailored to offer enriching experiences that showcase the best of each destination.</li>
          <li className='commit-list-item'><FaCheck className='green-check' /> <strong>Safety and Security</strong> - Your safety is our priority. We adhere to the highest safety standards and protocols in place to ensure a secure journey.</li>
          <li className='commit-list-item'><FaCheck className='green-check' /> <strong>Expert Guides</strong> - Our knowledgeable and friendly guides are passionate about the places you visit and will enhance your experience with insightful information and personal attention.</li>
          <li className='commit-list-item'><FaCheck className='green-check' /> <strong>Customer Satisfaction</strong> - We are committed to delivering excellent service and ensuring that every aspect of your tour meets or exceeds your expectations.</li>
          <li className='commit-list-item'><FaCheck className='green-check' /> <strong>Personalized Service</strong> - We understand that every traveler is unique. Our team is available to customize your itinerary and provide support tailored to your specific needs and interests.</li>
        </ul>
        <p>Travel with confidence, knowing that real people are here to guide and support you every step of the way, making your adventures unforgettable.</p>
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