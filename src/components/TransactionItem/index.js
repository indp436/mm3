import './index.css'

const CreateTransaction = props => {
  const {details, onDeleteTransaction} = props
  const {title, id, amount, type} = details

  const deleteButtonClicked = () => {
    onDeleteTransaction(id, type, amount)
  }
  const displayingText = type === 'INCOME' ? 'Income' : 'Expenses'

  return (
    <ul className="transaction-bar">
      <p className="transaction-title">{title}</p>
      <p className="transaction-title">{amount}</p>
      <p className="transaction-title">{displayingText}</p>
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
    </ul>
  )
}

export default CreateTransaction
