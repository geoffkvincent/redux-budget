//Action Creators
const ADD_ENTRY = ' ADD_ENTRY'

//Actions
const addEntry = (entry) => {
  return { type: ADD_ENTRY, debit: {...debit, type: 'Debit'} }
}

//Reducer
const ledger = (state = [], action) => {
  switch(action.type) {
    case ADD_ENTRY:
      return [...state, action.entry]
    default:
      return state
  }
}

//store
// getState()
// dispatch()
// subscribe()
// replaceReducer()

const { createStore, combineReducers, compose } = Redux

const rootReducer = combineReducers({
  ledger,
})

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
)

const handleSubmit = (e) => {
  e.preventDefault()
  const obj = {}
  const form = e.target
  for (let el of form.elements) {
    if (el.name)
      obj[el.name] = encodeURIComponent(el.value)
  }
  store.dispatch(addEntry(obj))
  form.reset()
  console.log(store.getState().ledger)
}

document.getElementById('add_entry').addEventListener('submit',handleSubmit)