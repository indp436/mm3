import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CreateCard from '../MoneyDetails/index'
import CreateTransaction from '../TransactionItem/index'

const cardDetailsList = [
  {
    moneyType: 'Your Balance',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    alt: 'balance',
    initialBalance: '0',
    bg: '#84cc16',
    bgColor: 'green',
  },
  {
    moneyType: 'Your Income',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    alt: 'income',
    initialIncome: '0',
    bg: '#06b6d4',
    bgColor: 'blue',
  },
  {
    moneyType: 'Your Expenses',
    initialExpenses: '0',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    alt: 'expenses',
    bg: ' #7c3aed',
    bgColor: 'violet',
  },
]

/* const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
] */

const initialList = [
  {id: uuidv4(), title: 'salary', amount: 60000, type: 'Income'},
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    totalBalance: cardDetailsList[0].initialBalance,
    totalIncome: cardDetailsList[1].initialIncome,
    totalExpenses: cardDetailsList[2].initialExpenses,
    transactionsList: initialList,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      type: 'Income',
    }))

    if (type === 'Income') {
      this.setState(prevState => ({
        totalIncome: parseInt(prevState.totalIncome) + parseInt(amount),
      }))
    }

    if (type === 'Expenses') {
      this.setState(prevState => ({
        totalExpenses: parseInt(prevState.totalExpenses) + parseInt(amount),
      }))
    }

    this.setState(prevState => ({
      totalBalance:
        parseInt(prevState.totalIncome) - parseInt(prevState.totalExpenses),
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeSelection = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {
      title,
      amount,
      transactionsList,
      type,
      totalBalance,
      totalIncome,
      totalExpenses,
    } = this.state

    return (
      <div className="bg">
        <div className="name-container">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <ul className="money-details-container">
          <div className="total-balance-container">
            <CreateCard
              details={cardDetailsList[0]}
              key={cardDetailsList[0].alt}
              totalValue={totalBalance}
            />
          </div>
          <div className="total-income-container">
            <CreateCard
              details={cardDetailsList[1]}
              key={cardDetailsList[1].alt}
              totalValue={totalIncome}
            />
          </div>
          <div className="total-expenses-container">
            <CreateCard
              details={cardDetailsList[2]}
              key={cardDetailsList[2].alt}
              totalValue={totalExpenses}
            />
          </div>
        </ul>

        <div className="below-container">
          <div className="input-container">
            <h4 className="AddTransaction">Add Transaction</h4>

            <label htmlFor="title" className="title-label">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="TITLE"
              className="input-title"
              onChange={this.onChangeTitle}
            />

            <label htmlFor="title" className="title-label">
              AMOUNT
            </label>
            <input
              type="text"
              id="title"
              value={amount}
              placeholder="AMOUNT"
              className="input-title"
              onChange={this.onChangeAmount}
            />

            <label htmlFor="title" className="title-label">
              TYPE
            </label>
            <select
              className="input-title"
              onChange={this.onChangeSelection}
              value={type}
            >
              <option select="true" value="Income" optionid="INCOME">
                Income
              </option>
              <option value="Expenses" optionid="EXPENSES">
                Expenses
              </option>
            </select>

            <button
              className="add-button"
              type="button"
              onClick={this.onAddTransaction}
            >
              Add
            </button>
          </div>

          <div className="history-container">
            <h4 className="AddTransaction">History</h4>
            <ul className="title-amount-type-container">
              <div className="title-amount-type-container-box">
                <p className="amount-parts">Title</p>
                <p className="amount-parts">Amount</p>
                <p className="amount-parts">Type</p>
              </div>
              {transactionsList.map(each => (
                <CreateTransaction details={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
