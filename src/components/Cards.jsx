import CardItem from "./CardItem"
import './Cards.css'


const Cards = ()=> {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards-container">
        <ul className="cards-items">
          <CardItem 
            src="images/waterfall.webp"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
          />
          <CardItem 
            src="images/islands.webp"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services"
          />
        </ul>
        <ul className="cards-items">
          <CardItem 
            src="images/waterfall.webp"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
          />
          <CardItem 
            src="images/islands.webp"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services"
          />
          <CardItem 
            src="images/islands.webp"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services"
          />
        </ul>
      </div>
    </div>
  )
}

export default Cards