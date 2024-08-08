import './Experts.css'
import PropTypes from 'prop-types'

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const ExpertCard = ({ photo, name, location, linkedin, instagram }) => {
  return (
    <div className='expert-card'>
      <figure className='expert-fig'><img src={photo} alt={`picture of ${name}`} /></figure>
      <div className="expert-info">
        <h3 className='expert-name'>{name}</h3>
        <p className="expert-location">{location}</p>
        <span className="expert-social">
          <a href={instagram}><FaInstagram className='expert-social-icon instagram-icon' /></a>
          <a href={linkedin}><FaLinkedinIn className='expert-social-icon linkedin-icon' /></a>
        </span>
      </div>
    </div>
  )
}

export default ExpertCard

ExpertCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  linkedin: PropTypes.string,
  instagram: PropTypes.string
}