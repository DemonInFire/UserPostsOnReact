const actionTypeChangeInfo = 'CHANGE_INFO'
const actionTypeAddInfo = 'ADD_INFO'

const reducerCheck = (state, action) => {
  switch (action.type) {
    case actionTypeChangeInfo:
      return (state) =>([
        state.map(status => {
            if (status.id === action.id) {
                return status.check
            }
            return status
        })
    ])
    case actionTypeAddInfo:
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducerCheck