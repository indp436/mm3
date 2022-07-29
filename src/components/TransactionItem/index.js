import './index.css'

const CreateTransaction = props => {
  const {details} = props
  const {title, id, type, amount} = details

  return (
    <li className="transaction-bar">
      <p className="transaction-title">{title}</p>
      <p className="transaction-title">{amount}</p>
      <p className="transaction-title">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete-icon"
      />
    </li>
  )
}

export default CreateTransaction
