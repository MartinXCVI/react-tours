import CardItem from "./CardItem"
import './Cards.css'


const Cards = ()=> {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards-container">
        <ul className="cards-items">
          <CardItem 
            src="/images/waterfall.webp"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
          />
          <CardItem 
            src="/images/egypt.webp"
            text="Spend magic nights at the mysterious outskirts of Egypt and discovering its wonders"
            label="Luxury"
            path="/services"
          />
        </ul>
        <ul className="cards-items">
          <CardItem 
            src="/images/patagonia.webp"
            text="Feel eventually amazed by the epicness of the Argentinian Patagonia astonishing region"
            label="Adventure"
            path="/services"
          />
          <CardItem 
            src="/images/hongkong.webp"
            text="Let yourself be carried away by the exoticism of Hong Kong and its vibrant nightlife."
            label="Luxury"
            path="/services"
          />
          <CardItem 
            src="/images/islands.webp"
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