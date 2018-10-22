const ADD_DEBIT = 'ADD_DEBIT'
const ADD_CREDIT = "ADD_CREDIT"

const addDebit = (debit) => {
  return { type: ADD_CREDIT, debit}
}

const addCredit = (credit) => {
  return { type: ADD_CREDIT, credit}
}

const ledger = (state = [], action) => {
  switch(action.type) {
    case ADD_DEBIT:
      return [...state, action.debit]
    case ADD_CREDIT:
      return [...state, action.credit]
    default:
      return state
  }
}