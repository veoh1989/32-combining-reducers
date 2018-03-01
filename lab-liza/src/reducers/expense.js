let initialState = {};


export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE':
    let changedState = {...state};
    delete changedState[payload._id];
    return changedState;
  case 'EXPENSE_CREATE': return {...state, [payload.catId]: [...state[payload.catId], payload]};
  case 'EXPENSE_UPDATE': {
    let changedState = {...state};
    let changedExpense = state[payload.catId].map(expense => expense._id === payload._id ? payload : expense); 
    changedState[payload.catId] = changedExpense;
    return changedState;
  }
  case 'EXPENSE_DELETE': {
    let changedState = { ...state };
    let changedExpense = state[payload.catId].filter(expense => expense._id !== payload._id);
    changedState[payload.catId] = changedExpense;
    return changedState;
  }
  case 'EXPENSE_RESET': return initialState;
  default: return state;
  }
};
