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

const { createStore, combineReducers, compose } = Redux

const rootReducer = combineReducers({
  ledger,
})

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOL_EXTENSION && window.__REDUX-DEVTOOLS_EXTENSION()
)

store.dipatch(addDebit(-40))
store.dispatch(addCredit(60))
console.log (store)