import './Gallery.css'


const DestCard = ({cardBg, destName}) => {
  return (
    <div className={`dest-card ${cardBg}`} >
      <h3 className='dest-name'>{destName}</h3>
    </div>
  )
}

export default DestCard