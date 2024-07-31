import { Link } from "react-router-dom"

const CardItem = ({ path, label, src, text})=> {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={path} >
          <figure className="cards-item-fig" data-category={label}>
            <img src={src} alt="" className="cards-item-img" />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem