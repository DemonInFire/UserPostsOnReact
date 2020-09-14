const actionTypeCheck = 'CHECKED'

const reducerCheckInitialState = {
    check: false,
}
const reducerCheck = (state = reducerCheckInitialState, action) => {
  switch (action.type) {
    case actionTypeCheck:
        return {
            ...state,
            check: action.check,
        }
    default:
      return state
  }
}

export default reducerCheck