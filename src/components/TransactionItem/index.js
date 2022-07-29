import './index.css'

const CreateTransaction = props => {
  const {details, onDeleteTransaction} = props
  const {title, id, type = 'Income', amount} = details

  const deleteButtonClicked = () => {
    onDeleteTransaction(id, type, amount)
  }

  return (
    <li className="transaction-bar">
      <p className="transaction-title">{title}</p>
      <p className="transaction-title">{amount}</p>
      <p className="transaction-title">{type}</p>
      <button
        className="delete"
        testid={id}
        type="button"
        onClick={deleteButtonClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default CreateTransaction
