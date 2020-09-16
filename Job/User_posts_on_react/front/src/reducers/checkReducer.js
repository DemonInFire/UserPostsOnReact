const actionTypeChangeInfo = 'CHANGE_INFO'
const actionTypeAddInfo = 'ADD_INFO'

const reducerCheck = (state, action) => {
  switch (action.type) {
    case actionTypeChangeInfo:
      let changeCheck = state.filter(obj => obj.id === action.payload.id)[0]
      changeCheck.check = !changeCheck.check
      return state
      
    case actionTypeAddInfo:
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducerCheck