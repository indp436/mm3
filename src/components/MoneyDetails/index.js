import './index.css'

const CreateCard = props => {
  const {details, totalValue, testid} = props
  const {imgUrl, moneyType, alt, bgColor} = details

  return (
    <li className={`money-card ${bgColor}`}>
      <div className="money-card-container">
        <img src={imgUrl} alt={alt} className="money-card-image" />
      </div>
      <div className="money-card-details">
        <p className="money-card-type">{moneyType}</p>
        <p className="money-card-balance" testid={testid}>
          Rs. {totalValue}
        </p>
      </div>
    </li>
  )
}

export default CreateCard
